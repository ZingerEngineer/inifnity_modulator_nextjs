"use client";

import ModulationTabs from "./components/ModulationTabs";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Signal Modulation Lab</h1>
          <p className="text-muted-foreground">
            Explore different types of signal modulation techniques with interactive visualizations
          </p>
        </div>
        <ModulationTabs />
      </div>
    </main>
  );
}