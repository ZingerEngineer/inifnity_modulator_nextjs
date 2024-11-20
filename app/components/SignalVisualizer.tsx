"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

interface SignalVisualizerProps {
  data: Array<{
    time: number;
    carrier: number;
    message: number;
    modulated: number;
  }>;
  timeScale: number;
  amplitudeScale: number;
}

export default function SignalVisualizer({ data, timeScale, amplitudeScale }: SignalVisualizerProps) {
  return (
    <Card className="p-6 col-span-1 lg:col-span-2">
      <Tabs defaultValue="all" className="h-full">
        <TabsList>
          <TabsTrigger value="all">All Signals</TabsTrigger>
          <TabsTrigger value="carrier">Carrier</TabsTrigger>
          <TabsTrigger value="message">Message</TabsTrigger>
          <TabsTrigger value="modulated">Modulated</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                label={{ value: `Time (×${timeScale.toFixed(1)})`, position: "bottom" }}
              />
              <YAxis 
                label={{ 
                  value: `Amplitude (×${amplitudeScale.toFixed(1)})`, 
                  angle: -90, 
                  position: "left" 
                }} 
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="carrier"
                stroke="hsl(var(--chart-1))"
                dot={false}
                name="Carrier"
              />
              <Line
                type="monotone"
                dataKey="message"
                stroke="hsl(var(--chart-2))"
                dot={false}
                name="Message"
              />
              <Line
                type="monotone"
                dataKey="modulated"
                stroke="hsl(var(--chart-3))"
                dot={false}
                name="Modulated"
              />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="carrier" className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                label={{ value: `Time (×${timeScale.toFixed(1)})`, position: "bottom" }}
              />
              <YAxis 
                label={{ 
                  value: `Amplitude (×${amplitudeScale.toFixed(1)})`, 
                  angle: -90, 
                  position: "left" 
                }} 
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="carrier"
                stroke="hsl(var(--chart-1))"
                dot={false}
                name="Carrier"
              />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="message" className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                label={{ value: `Time (×${timeScale.toFixed(1)})`, position: "bottom" }}
              />
              <YAxis 
                label={{ 
                  value: `Amplitude (×${amplitudeScale.toFixed(1)})`, 
                  angle: -90, 
                  position: "left" 
                }} 
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="message"
                stroke="hsl(var(--chart-2))"
                dot={false}
                name="Message"
              />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="modulated" className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                label={{ value: `Time (×${timeScale.toFixed(1)})`, position: "bottom" }}
              />
              <YAxis 
                label={{ 
                  value: `Amplitude (×${amplitudeScale.toFixed(1)})`, 
                  angle: -90, 
                  position: "left" 
                }} 
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="modulated"
                stroke="hsl(var(--chart-3))"
                dot={false}
                name="Modulated"
              />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    </Card>
  );
}