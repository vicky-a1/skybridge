import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Gauge, Wind, Thermometer } from "lucide-react";

interface TelemetryDisplayProps {
  droneId: string;
}

const TelemetryDisplay = ({ droneId }: TelemetryDisplayProps) => {
  // Mock telemetry data
  const telemetry = {
    altitude: 120,
    speed: 45,
    temperature: 18,
    windSpeed: 12,
    heading: 247,
    signalStrength: 92,
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" />
          Telemetry - {droneId}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background p-3 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-1">
              <Gauge className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">Altitude</span>
            </div>
            <p className="text-xl font-bold text-foreground">{telemetry.altitude}m</p>
          </div>

          <div className="bg-background p-3 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-4 h-4 text-secondary" />
              <span className="text-xs text-muted-foreground">Speed</span>
            </div>
            <p className="text-xl font-bold text-foreground">{telemetry.speed} km/h</p>
          </div>

          <div className="bg-background p-3 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-1">
              <Thermometer className="w-4 h-4 text-warning" />
              <span className="text-xs text-muted-foreground">Temp</span>
            </div>
            <p className="text-xl font-bold text-foreground">{telemetry.temperature}°C</p>
          </div>

          <div className="bg-background p-3 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-1">
              <Wind className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">Wind</span>
            </div>
            <p className="text-xl font-bold text-foreground">{telemetry.windSpeed} km/h</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Heading</span>
            <span className="font-medium text-foreground">{telemetry.heading}°</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Signal Strength</span>
            <span className="font-medium text-success">{telemetry.signalStrength}%</span>
          </div>
        </div>

        <div className="bg-background p-3 rounded-lg border border-border">
          <p className="text-xs text-muted-foreground mb-2">Live Feed</p>
          <div className="aspect-video bg-muted rounded flex items-center justify-center">
            <p className="text-xs text-muted-foreground">Video stream placeholder</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TelemetryDisplay;
