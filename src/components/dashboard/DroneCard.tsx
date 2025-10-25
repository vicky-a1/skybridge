import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Battery, Plane, MapPin } from "lucide-react";

interface DroneCardProps {
  drone: {
    id: string;
    status: "active" | "standby" | "returning" | "maintenance";
    battery: number;
    location: string;
    mission: string;
    altitude: number;
    speed: number;
  };
}

const DroneCard = ({ drone }: DroneCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success/10 text-success border-success/20";
      case "returning":
        return "bg-warning/10 text-warning border-warning/20";
      case "standby":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-destructive/10 text-destructive border-destructive/20";
    }
  };

  const getBatteryColor = (level: number) => {
    if (level > 60) return "text-success";
    if (level > 30) return "text-warning";
    return "text-destructive";
  };

  return (
    <Card className="bg-background border-border p-4 hover:shadow-glow transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
            <Plane className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">{drone.id}</p>
            <p className="text-xs text-muted-foreground">{drone.mission}</p>
          </div>
        </div>
        <Badge variant="outline" className={getStatusColor(drone.status)}>
          {drone.status}
        </Badge>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Battery className={`w-3 h-3 ${getBatteryColor(drone.battery)}`} />
            <span>Battery</span>
          </div>
          <span className={`font-medium ${getBatteryColor(drone.battery)}`}>
            {drone.battery}%
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>Location</span>
          </div>
          <span className="font-medium text-foreground">{drone.location}</span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Alt / Speed</span>
          <span className="font-medium text-foreground">
            {drone.altitude}m / {drone.speed} km/h
          </span>
        </div>
      </div>
    </Card>
  );
};

export default DroneCard;
