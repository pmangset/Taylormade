import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Technology() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1535136104956-619ec3f00036?auto=format&fit=crop&q=80&w=2000" 
            alt="Technology" 
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          />
        </div>
        
        <div className="container relative z-20 px-4">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Innovation Lab</span>
            <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Driven by Data. <br/>Built for Speed.
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore the engineering breakthroughs that power the world's most advanced golf equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Features */}
      <section className="py-24">
        <div className="container px-4 mx-auto space-y-32">
          
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-4xl font-bold uppercase tracking-tight mb-6">60X Carbon Twist Face</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Twenty years of development marks the end of the titanium era. The all new 60X Carbon Twist Face is 44% lighter than an equivalent titanium face, while also being 11% larger than SIM2 and SIM2 Max drivers.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Sixty layers of carbon fiber have been strategically designed to optimize energy transfer to deliver fast ball speeds over a large area, resulting in optimal distance and forgiveness.
              </p>
              <Button variant="outline" className="uppercase font-bold tracking-wider">
                Explore Drivers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="order-1 lg:order-2 aspect-square bg-secondary rounded-lg border border-border overflow-hidden p-12 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1535136104956-619ec3f00036?auto=format&fit=crop&q=80&w=800" 
                alt="Carbon Face" 
                className="w-full h-full object-contain mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-secondary rounded-lg border border-border overflow-hidden p-12 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&q=80&w=800" 
                alt="SpeedFoam" 
                className="w-full h-full object-contain mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold uppercase tracking-tight mb-6">SpeedFoam™ Air</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Newly engineered SpeedFoam™ Air is 69% lighter than its predecessor. It provides an average of 3.5g of weight savings that has been redistributed to further optimize mass properties for better launch conditions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The new formulation delivers exquisite sound and feel while producing a fast, flexible face.
              </p>
              <Button variant="outline" className="uppercase font-bold tracking-wider">
                Explore Irons <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
