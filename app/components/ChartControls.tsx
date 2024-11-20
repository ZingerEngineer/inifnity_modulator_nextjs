'use client'

import { Slider } from '@/components/ui/slider'
import { Card } from '@/components/ui/card'
import { WormIcon, Settings2Icon, ActivityIcon, ZoomInIcon } from 'lucide-react'

interface ChartControlsProps {
  timeScale: number
  setTimeScale: (value: number) => void
  amplitudeScale: number
  setAmplitudeScale: (value: number) => void
  params: SignalParams
  updateParams: (updates: Partial<SignalParams>) => void
}

interface SignalParams {
  carrierFreq: number
  carrierAmp: number
  messageFreq: number
  messageAmp: number
  modulationIndex: number
}

export default function ChartControls({
  timeScale,
  setTimeScale,
  amplitudeScale,
  setAmplitudeScale,
  params,
  updateParams
}: ChartControlsProps) {
  return (
    <Card className="p-6 col-span-1">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold flex items-center gap-2">
            <ZoomInIcon className="w-5 h-5" />
            View Controls
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm">
                Time Scale (×{timeScale.toFixed(1)})
              </label>
              <Slider
                value={[timeScale]}
                onValueChange={([value]) => setTimeScale(value)}
                min={0.1}
                max={5}
                step={0.1}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">
                Amplitude Scale (×{amplitudeScale.toFixed(1)})
              </label>
              <Slider
                value={[amplitudeScale]}
                onValueChange={([value]) => setAmplitudeScale(value)}
                min={0.1}
                max={5}
                step={0.1}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold flex items-center gap-2">
            <WormIcon className="w-5 h-5" />
            Carrier Signal
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm">
                Frequency ({params.carrierFreq} Hz)
              </label>
              <Slider
                value={[params.carrierFreq]}
                onValueChange={([value]) =>
                  updateParams({ carrierFreq: value })
                }
                min={1}
                max={20}
                step={0.1}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Amplitude ({params.carrierAmp})</label>
              <Slider
                value={[params.carrierAmp]}
                onValueChange={([value]) => updateParams({ carrierAmp: value })}
                min={0.1}
                max={2}
                step={0.1}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold flex items-center gap-2">
            <ActivityIcon className="w-5 h-5" />
            Message Signal
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm">
                Frequency ({params.messageFreq} Hz)
              </label>
              <Slider
                value={[params.messageFreq]}
                onValueChange={([value]) =>
                  updateParams({ messageFreq: value })
                }
                min={0.1}
                max={5}
                step={0.1}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Amplitude ({params.messageAmp})</label>
              <Slider
                value={[params.messageAmp]}
                onValueChange={([value]) => updateParams({ messageAmp: value })}
                min={0.1}
                max={1}
                step={0.1}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold flex items-center gap-2">
            <Settings2Icon className="w-5 h-5" />
            Modulation
          </h3>
          <div className="space-y-2">
            <label className="text-sm">
              Modulation Index ({params.modulationIndex})
            </label>
            <Slider
              value={[params.modulationIndex]}
              onValueChange={([value]) =>
                updateParams({ modulationIndex: value })
              }
              min={0}
              max={1}
              step={0.01}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
