"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AmplitudeModulation from "./modulation/AmplitudeModulation";
import FrequencyModulation from "./modulation/FrequencyModulation";
import PhaseModulation from "./modulation/PhaseModulation";

export default function ModulationTabs() {
  return (
    <Tabs defaultValue="am" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="am">Amplitude Modulation</TabsTrigger>
        <TabsTrigger value="fm">Frequency Modulation</TabsTrigger>
        <TabsTrigger value="pm">Phase Modulation</TabsTrigger>
      </TabsList>
      <TabsContent value="am">
        <AmplitudeModulation />
      </TabsContent>
      <TabsContent value="fm">
        <FrequencyModulation />
      </TabsContent>
      <TabsContent value="pm">
        <PhaseModulation />
      </TabsContent>
    </Tabs>
  );
}