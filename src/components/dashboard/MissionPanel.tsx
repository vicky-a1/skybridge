import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Package, Eye } from "lucide-react";

interface Mission {
  id: string;
  type: string;
  priority: string;
  status: string;
  eta: string;
}

interface MissionPanelProps {
  missions: Mission[];
}

const MissionPanel = ({ missions }: MissionPanelProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "medium":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-progress":
        return "bg-primary/10 text-primary border-primary/20";
      case "pending":
        return "bg-muted text-muted-foreground border-border";
      case "completed":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getTypeIcon = (type: string) => {
    return type === "Scout" ? (
      <Eye className="w-4 h-4" />
    ) : (
      <Package className="w-4 h-4" />
    );
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground">Active Missions</CardTitle>
        <Button size="sm" variant="outline">
          New Mission
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="bg-background p-3 rounded-lg border border-border hover:shadow-card transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                  {getTypeIcon(mission.type)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{mission.id}</p>
                  <p className="text-xs text-muted-foreground">{mission.type}</p>
                </div>
              </div>
              <Badge variant="outline" className={getPriorityColor(mission.priority)}>
                {mission.priority}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <Badge variant="outline" className={getStatusColor(mission.status)}>
                {mission.status}
              </Badge>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>ETA: {mission.eta}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default MissionPanel;
