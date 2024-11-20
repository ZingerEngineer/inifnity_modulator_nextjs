'use client'

import { useMemo, useState } from 'react'

interface SignalParams {
  carrierFreq: number
  carrierAmp: number
  messageFreq: number
  messageAmp: number
  modulationIndex: number
}

interface UseSignalDataProps {
  timeScale: number
  amplitudeScale: number
  modulationType: 'dsb-fc' | 'dsb-sc' | 'ssb' | 'fm' | 'pm'
}

export function useSignalData({
  timeScale,
  amplitudeScale,
  modulationType
}: UseSignalDataProps) {
  const [params, setParams] = useState<SignalParams>({
    carrierFreq: 10,
    carrierAmp: 1,
    messageFreq: 1,
    messageAmp: 0.5,
    modulationIndex: 0.8
  })

  const updateParams = (updates: Partial<SignalParams>) => {
    setParams((prev) => ({ ...prev, ...updates }))
  }

  const signalData = useMemo(() => {
    const data = []
    const samples = 500
    const timeStep = (2 * Math.PI * timeScale) / samples

    for (let i = 0; i < samples; i++) {
      const t = i * timeStep

      // Base signals
      const carrier = params.carrierAmp * Math.sin(params.carrierFreq * t)
      const message = params.messageAmp * Math.sin(params.messageFreq * t)

      // Calculate modulated signal based on type
      let modulated
      switch (modulationType) {
        case 'dsb-fc':
          modulated = carrier * (1 + params.modulationIndex * message)
          break
        case 'dsb-sc':
          modulated = carrier * message
          break
        case 'ssb':
          // Upper sideband only
          modulated =
            carrier * message -
            params.carrierAmp *
              Math.cos(params.carrierFreq * t) *
              params.messageAmp *
              Math.cos(params.messageFreq * t)
          break
        case 'fm':
          modulated =
            params.carrierAmp *
            Math.sin(
              params.carrierFreq * t +
                params.modulationIndex * Math.sin(params.messageFreq * t)
            )
          break
        case 'pm':
          modulated =
            params.carrierAmp *
            Math.sin(params.carrierFreq * t + params.modulationIndex * message)
          break
      }

      data.push({
        time: t,
        carrier: carrier * amplitudeScale,
        message: message * amplitudeScale,
        modulated: modulated * amplitudeScale
      })
    }
    return data
  }, [params, timeScale, amplitudeScale, modulationType])

  return { signalData, params, updateParams }
}
