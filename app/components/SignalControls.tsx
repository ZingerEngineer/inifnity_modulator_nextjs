'use client'

import { Slider } from '@/components/ui/slider'
import { Card } from '@/components/ui/card'
import { WormIcon, Settings2Icon, ActivityIcon } from 'lucide-react'

interface SignalControlsProps {
  carrierFreq: number
  setCarrierFreq: (value: number) => void
  carrierAmp: number
  setCarrierAmp: (value: number) => void
  messageFreq: number
  setMessageFreq: (value: number) => void
  messageAmp: number
  setMessageAmp: (value: number) => void
  modulationIndex: number
  setModulationIndex: (value: number) => void
}

export default function SignalControls({
  carrierFreq,
  setCarrierFreq,
  carrierAmp,
  setCarrierAmp,
  messageFreq,
  setMessageFreq,
  messageAmp,
  setMessageAmp,
  modulationIndex,
  setModulationIndex
}: SignalControlsProps) {
  return (
    <Card className="p-6 col-span-1">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold flex items-center gap-2">
            <WormIcon className="w-5 h-5" />
            Carrier Signal
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm">Frequency ({carrierFreq} Hz)</label>
              <Slider
                value={[carrierFreq]}
                onValueChange={([value]) => setCarrierFreq(value)}
                min={1}
                max={20}
                step={0.1}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Amplitude ({carrierAmp})</label>
              <Slider
                value={[carrierAmp]}
                onValueChange={([value]) => setCarrierAmp(value)}
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
              <label className="text-sm">Frequency ({messageFreq} Hz)</label>
              <Slider
                value={[messageFreq]}
                onValueChange={([value]) => setMessageFreq(value)}
                min={0.1}
                max={5}
                step={0.1}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">Amplitude ({messageAmp})</label>
              <Slider
                value={[messageAmp]}
                onValueChange={([value]) => setMessageAmp(value)}
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
              Modulation Index ({modulationIndex})
            </label>
            <Slider
              value={[modulationIndex]}
              onValueChange={([value]) => setModulationIndex(value)}
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
