import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Activity, 
  Battery, 
  MapPin, 
  Radio, 
  AlertCircle,
  Gauge,
  Wind,
  Thermometer,
  ArrowLeft
} from "lucide-react";
import DroneCard from "@/components/dashboard/DroneCard";
import MissionPanel from "@/components/dashboard/MissionPanel";
import TelemetryDisplay from "@/components/dashboard/TelemetryDisplay";
import skybridgeLogo from "@/assets/skybridge-logo.png";

const Dashboard = () => {
  // Mock data for demonstration
  const activeDrones = [
    {
      id: "SKY-001",
      status: "active" as const,
      battery: 87,
      location: "Zone A-12",
      mission: "Delivery #DL-1243",
      altitude: 120,
      speed: 45,
    },
    {
      id: "SKY-002",
      status: "returning" as const,
      battery: 34,
      location: "Zone B-7",
      mission: "Returning to base",
      altitude: 95,
      speed: 38,
    },
    {
      id: "SKY-003",
      status: "standby" as const,
      battery: 100,
      location: "Base Station 1",
      mission: "Ready",
      altitude: 0,
      speed: 0,
    },
  ];

  const activeMissions = [
    { id: "DL-1243", type: "Delivery", priority: "high", status: "in-progress", eta: "4 min" },
    { id: "DL-1244", type: "Delivery", priority: "medium", status: "in-progress", eta: "8 min" },
    { id: "SC-089", type: "Scout", priority: "high", status: "pending", eta: "12 min" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back</span>
                </Button>
              </Link>
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <img 
                    src={skybridgeLogo} 
                    alt="SkyBridge Logo" 
                    className="h-10 md:h-12 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-glow"
                    {...({ fetchpriority: "high" } as any)}
                    decoding="async"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-bold text-foreground tracking-tight transition-colors group-hover:text-primary">
                    SkyBridge
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Mission Control
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="flex items-center gap-1">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
                System Online
              </Badge>
              <Badge variant="secondary">{activeDrones.length} Active Drones</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Flights</p>
                  <p className="text-3xl font-bold text-foreground">2</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Fleet Status</p>
                  <p className="text-3xl font-bold text-foreground">{activeDrones.length}</p>
                </div>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Missions Today</p>
                  <p className="text-3xl font-bold text-foreground">47</p>
                </div>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Battery</p>
                  <p className="text-3xl font-bold text-foreground">74%</p>
                </div>
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Battery className="w-6 h-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Drone Fleet */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Active Fleet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {activeDrones.map((drone) => (
                  <DroneCard key={drone.id} drone={drone} />
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-success" />
                    <span className="text-sm text-muted-foreground">Communication</span>
                  </div>
                  <Badge variant="outline" className="text-success">Optimal</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Wind Speed</span>
                  </div>
                  <span className="text-sm text-foreground">12 km/h</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-warning" />
                    <span className="text-sm text-muted-foreground">Temperature</span>
                  </div>
                  <span className="text-sm text-foreground">24°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Alerts</span>
                  </div>
                  <Badge variant="outline">None</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Map View */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="text-foreground">Live Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2 animate-pulse-glow" />
                    <p className="text-sm text-muted-foreground">Map visualization</p>
                    <p className="text-xs text-muted-foreground mt-1">Real-time drone tracking</p>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                  <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-secondary rounded-full animate-pulse-glow"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Missions & Telemetry */}
          <div className="lg:col-span-1 space-y-4">
            <MissionPanel missions={activeMissions} />
            <TelemetryDisplay droneId="SKY-001" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
