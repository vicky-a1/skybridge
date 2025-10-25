import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroDroneVideo from "/videos/hero-drone.mp4";
import { Link } from "react-router-dom";
import { Eye, Zap, Shield, MapPin, Activity, Sun, Moon, Cpu, Cloud, RefreshCw } from "lucide-react";
import { useTheme } from "next-themes";
import skybridgeLogo from "@/assets/skybridge-logo.png";
import urbanNetwork from "@/assets/urban-network.png";
import deliverySunset from "@/assets/delivery-sunset.png";
import smartDelivery from "@/assets/smart-delivery.png";
import warehouseOperations from "@/assets/warehouse-operations.png";
import disasterRelief from "@/assets/disaster-relief.jpg";
import agriculturalMonitoring from "@/assets/agricultural-monitoring.jpg";
import headquarters from "@/assets/headquarters.png";
import droneCloseup from "@/assets/drone-closeup.png";
import citySkylineDrones from "@/assets/city-skyline-drones.png";
import droneProduct from "@/assets/drone-product.png";
import hybridAiArchitecture from "@/assets/hybrid-ai-architecture.png";
import { DemoRequestDialog } from "@/components/DemoRequestDialog";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src={skybridgeLogo} 
                alt="SkyBridge Logo" 
                className="h-12 md:h-14 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-glow"
                {...({ fetchpriority: "high" } as any)}
                decoding="async"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-foreground tracking-tight transition-colors group-hover:text-primary">
                SkyBridge
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Autonomous Aerial Infrastructure
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#phases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Phases</a>
            <a href="#technology" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Technology</a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Link to="/dashboard">
              <Button variant="default" size="sm">Mission Control</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section - Video Priority */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-70 dark:opacity-50"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000' width='1920' height='1080'/%3E%3C/svg%3E"
          >
            <source src={heroDroneVideo} type="video/mp4" />
          </video>
        </div>
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground leading-tight">
              Autonomous Drones.<br />Smarter Delivery. Safer Skies.
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              From urban deliveries to disaster relief — AI-powered aerial infrastructure for every mission
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="shadow-glow"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Our Fleet
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => setDemoDialogOpen(true)}
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section with Delivery Image */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Redefining Aerial Infrastructure
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  SkyBridge builds AI-powered drones that deliver, observe, and save lives — from city streets to disaster zones.
                </p>
                <p className="text-muted-foreground mb-8">
                  Our autonomous fleet operates 24/7, combining edge AI for real-time decisions with cloud intelligence for continuous optimization.
                </p>
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Use Cases
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={deliverySunset} 
                    alt="SkyBridge drones delivering packages at sunset over residential area demonstrating autonomous last-mile delivery capabilities" 
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            Core Capabilities
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Enterprise-grade drone technology designed for reliability, safety, and scalability
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border shadow-card animate-fade-in hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Autonomous Delivery</h3>
              <p className="text-muted-foreground">
                AI-powered drones with edge obstacle avoidance and precision tethered delivery systems.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-card animate-fade-in hover-scale">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Scout Intelligence</h3>
              <p className="text-muted-foreground">
                Terrain mapping, hazard detection, and real-time intelligence for decision-makers.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-card animate-fade-in hover-scale">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">AI Mission Control</h3>
              <p className="text-muted-foreground">
                Centralized fleet orchestration with real-time telemetry and AI-assisted route optimization.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-card animate-fade-in hover-scale">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Redundant Safety</h3>
              <p className="text-muted-foreground">
                Multi-layer communication (4G/5G + satellite), geo-fencing, and return-to-home failsafes.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-card animate-fade-in hover-scale">
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Multi-Terrain Ready</h3>
              <p className="text-muted-foreground">
                From urban corridors to disaster zones and remote defense logistics scenarios.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-card animate-fade-in hover-scale">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Cloud-edge AI loop for model retraining and evolving mission autonomy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section with Real Images */}
      <section id="use-cases" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            Real-World Applications
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Proven solutions across diverse industries and critical scenarios
          </p>
          
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Smart Delivery */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
                  <span className="text-sm font-semibold text-primary">Urban Logistics</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Smart Home Delivery
                </h3>
                <p className="text-muted-foreground mb-6">
                  Autonomous door-to-door delivery with secure smart locker integration. Real-time tracking, precision landing, and contactless handoff for maximum convenience and security.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Secure authentication and package verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Precision GPS landing within centimeters</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={smartDelivery} 
                  alt="SkyBridge drone delivering package to smart locker at residential home showing autonomous last-mile delivery technology" 
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Disaster Relief */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={disasterRelief} 
                    alt="SkyBridge drones delivering emergency supplies to disaster relief area with people receiving critical aid in flooded zone" 
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-destructive/10 px-4 py-2 rounded-full mb-4">
                  <span className="text-sm font-semibold text-destructive">Emergency Response</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Disaster Relief Operations
                </h3>
                <p className="text-muted-foreground mb-6">
                  Rapid deployment of critical supplies to areas inaccessible by traditional means. Working with NDRF, NDMA, and emergency response teams to save lives when every second counts.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Rapid deployment in extreme conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Real-time terrain assessment and mapping</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Agricultural Monitoring */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-success/10 px-4 py-2 rounded-full mb-4">
                  <span className="text-sm font-semibold text-success">Agriculture</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Precision Agriculture
                </h3>
                <p className="text-muted-foreground mb-6">
                  AI-powered crop monitoring, health assessment, and yield optimization. Multi-spectral imaging and data analytics help farmers make informed decisions and maximize productivity.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Eye className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Multi-spectral crop health analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Real-time pest and disease detection</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={agriculturalMonitoring} 
                  alt="SkyBridge drones monitoring agricultural fields with farmers using technology for precision farming and crop health analysis" 
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* City Operations */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={citySkylineDrones} 
                    alt="Multiple SkyBridge drones operating over city skyline at sunset demonstrating urban air mobility and coordinated fleet management" 
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-secondary/10 px-4 py-2 rounded-full mb-4">
                  <span className="text-sm font-semibold text-secondary">Smart Cities</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Urban Fleet Coordination
                </h3>
                <p className="text-muted-foreground mb-6">
                  Seamless integration into urban airspace with intelligent traffic management. Multiple drones coordinate in real-time for maximum efficiency and safety across metropolitan areas.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Dynamic route optimization for urban corridors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Automated compliance with airspace regulations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section id="phases" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
            Evolution Path
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Strategic rollout across high-impact sectors
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-card p-6 rounded-lg border-l-4 border-primary shadow-card hover-scale">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Urban Quick-Commerce</h3>
                  <p className="text-muted-foreground mb-2">
                    Rapid, short-range delivery (3-8 km) in high-traffic urban zones. Partners: Swiggy, Zepto, Blinkit.
                  </p>
                  <span className="text-sm text-primary font-medium">Current Phase</span>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border-l-4 border-secondary shadow-card hover-scale">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-secondary-foreground font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Disaster Response</h3>
                  <p className="text-muted-foreground">
                    Supply delivery and terrain intelligence for NDMA, NDRF, and state emergency teams during crises.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border-l-4 border-accent shadow-card hover-scale">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-accent-foreground font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Event Management & Security</h3>
                  <p className="text-muted-foreground">
                    Crowd monitoring, emergency logistics, and situational awareness for large-scale events.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border-l-4 border-warning shadow-card hover-scale">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-warning rounded-full flex items-center justify-center flex-shrink-0 text-warning-foreground font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Defense & Strategic Logistics</h3>
                  <p className="text-muted-foreground">
                    Secure resupply and reconnaissance for DRDO, Armed Forces, and iDEX partners in remote areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
              Meet the SkyBridge Drone
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Engineered for reliability, precision, and autonomous operation in any environment
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 flex items-center justify-center">
                <img 
                  src={droneCloseup} 
                  alt="Close-up of SkyBridge autonomous delivery drone showcasing advanced sensor array and aerodynamic design" 
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Advanced Engineering</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Multi-Sensor Array</h4>
                      <p className="text-sm text-muted-foreground">360° vision with LIDAR, cameras, and ultrasonic sensors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Extended Flight Time</h4>
                      <p className="text-sm text-muted-foreground">Up to 45 minutes with 5kg payload capacity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Weather Resistant</h4>
                      <p className="text-sm text-muted-foreground">IP54 rating for all-weather operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={droneProduct} 
                alt="SkyBridge delivery drone product image highlighting compact foldable design and advanced navigation system" 
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-8">
                <div className="max-w-2xl">
                  <h4 className="text-xl font-bold text-foreground mb-2">Compact & Portable Design</h4>
                  <p className="text-muted-foreground">
                    Foldable architecture for easy transport and rapid deployment in any scenario
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid AI Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
              Hybrid Intelligence for Safe & Efficient Operations
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Our dual-AI architecture combines real-time edge processing with cloud-based optimization
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Edge AI */}
              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Cpu className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Edge AI</h3>
                <p className="text-muted-foreground">
                  Real-time obstacle avoidance, tethered delivery precision, autonomous navigation
                </p>
              </div>

              {/* Cloud AI */}
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-card">
                  <Cloud className="w-12 h-12 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Cloud AI</h3>
                <p className="text-muted-foreground">
                  Route optimization, fleet analytics, predictive maintenance, continuous learning
                </p>
              </div>
            </div>

            {/* Sync Flow */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <RefreshCw className="w-8 h-8 text-primary animate-pulse" />
            </div>

            {/* Data Flow Badge */}
            <div className="bg-card border border-border rounded-lg px-6 py-3 max-w-fit mx-auto">
              <p className="text-sm font-medium text-foreground">
                Telemetry → Cloud Training → OTA Edge Updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Center */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Mission Control Center
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  State-of-the-art command center for fleet management, real-time monitoring, and mission coordination.
                </p>
                <p className="text-muted-foreground mb-8">
                  Our operations team provides 24/7 oversight with AI-assisted decision making, ensuring every mission is executed flawlessly.
                </p>
                <Link to="/dashboard">
                  <Button size="lg" className="shadow-glow">
                    View Live Dashboard
                  </Button>
                </Link>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={headquarters} 
                  alt="SkyBridge mission control center showing advanced drone fleet management systems and real-time monitoring displays" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Operations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
              Automated Logistics Hub
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Fully integrated warehouse operations with robotic systems for seamless package handling and drone deployment
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={warehouseOperations} 
                alt="SkyBridge automated warehouse facility with robotic systems coordinating drone fleet operations and package logistics" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Technology Stack
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-background p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Edge AI</h4>
                <p className="text-sm text-muted-foreground">
                  Onboard object detection (CNN/YOLO), visual marker recognition, LIDAR-based obstacle avoidance
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Cloud AI</h4>
                <p className="text-sm text-muted-foreground">
                  Route optimization, fleet efficiency modeling, predictive maintenance, anomaly detection
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Communication</h4>
                <p className="text-sm text-muted-foreground">
                  Redundant 4G/5G + satellite fallback, encrypted TLS 1.3 channels, RF backup
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Security</h4>
                <p className="text-sm text-muted-foreground">
                  Role-based access control, end-to-end encryption, DGCA/MoCA compliance, geo-fence enforcement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-glow p-16 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Transform Aerial Operations?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join us in building the future of autonomous aerial infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="shadow-glow"
                onClick={() => setDemoDialogOpen(true)}
              >
                Schedule a Demo
              </Button>
              <Link to="/dashboard">
                <Button size="lg" variant="outline">
                  Access Mission Control
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src={skybridgeLogo} 
                alt="SkyBridge Logo" 
                className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <span className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                SkyBridge
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © 2025 SkyBridge. Building autonomous aerial infrastructure.
            </p>
          </div>
        </div>
      </footer>

      {/* Demo Request Dialog */}
      <DemoRequestDialog open={demoDialogOpen} onOpenChange={setDemoDialogOpen} />
    </div>
  );
};

export default Index;
