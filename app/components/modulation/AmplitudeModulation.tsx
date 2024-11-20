'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import SignalVisualizer from '../SignalVisualizer'
import { useSignalData } from '@/app/hooks/useSignalData'
import ChartControls from '../ChartControls'

export default function AmplitudeModulation() {
  const [timeScale, setTimeScale] = useState(1)
  const [amplitudeScale, setAmplitudeScale] = useState(1)
  const [modulationType, setModulationType] = useState<
    'dsb-fc' | 'dsb-sc' | 'ssb'
  >('dsb-fc')

  const { signalData, params, updateParams } = useSignalData({
    timeScale,
    amplitudeScale,
    modulationType
  })

  return (
    <Tabs
      defaultValue="dsb-fc"
      className="w-full space-y-4"
      onValueChange={(value) => setModulationType(value as any)}
    >
      <TabsList>
        <TabsTrigger value="dsb-fc">DSB-FC (Standard AM)</TabsTrigger>
        <TabsTrigger value="dsb-sc">DSB-SC</TabsTrigger>
        <TabsTrigger value="ssb">SSB</TabsTrigger>
      </TabsList>

      <Card className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ChartControls
            timeScale={timeScale}
            setTimeScale={setTimeScale}
            amplitudeScale={amplitudeScale}
            setAmplitudeScale={setAmplitudeScale}
            params={params}
            updateParams={updateParams}
          />
          <SignalVisualizer
            data={signalData}
            timeScale={timeScale}
            amplitudeScale={amplitudeScale}
          />
        </div>
      </Card>
    </Tabs>
  )
}
