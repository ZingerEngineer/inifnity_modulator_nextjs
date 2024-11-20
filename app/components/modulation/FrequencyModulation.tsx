'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import SignalVisualizer from '../SignalVisualizer'
import { useSignalData } from '@/app/hooks/useSignalData'
import ChartControls from '../ChartControls'

export default function FrequencyModulation() {
  const [timeScale, setTimeScale] = useState(1)
  const [amplitudeScale, setAmplitudeScale] = useState(1)

  const { signalData, params, updateParams } = useSignalData({
    timeScale,
    amplitudeScale,
    modulationType: 'fm'
  })

  return (
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
  )
}
