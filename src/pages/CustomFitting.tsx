import { Button } from '@/components/ui/button';
import { Target, Activity, Settings, Calendar } from 'lucide-react';

export function CustomFitting() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&q=80&w=2000" 
            alt="Custom Fitting" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 text-center max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Ultimate Experience</span>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Play Your Best
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Unlock your full potential with equipment tailored specifically to your swing. Data-driven precision meets expert analysis.
          </p>
          <Button size="lg" className="text-lg uppercase font-bold tracking-wider h-14 px-8">
            <Calendar className="mr-2 h-5 w-5" /> Book a Fitting
          </Button>
        </div>
      </section>

      {/* Why Get Fit */}
      <section className="py-24 bg-secondary">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight mb-4">Why Custom Fitting?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every swing is unique. Off-the-rack clubs force you to adapt to the equipment. Custom fitting adapts the equipment to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Target className="h-12 w-12 text-primary mb-6" />,
                title: 'Maximize Distance & Accuracy',
                desc: 'Optimize launch conditions, spin rates, and ball speed to get the most out of every shot.'
              },
              {
                icon: <Activity className="h-12 w-12 text-primary mb-6" />,
                title: 'Data-Driven Analysis',
                desc: 'Utilize state-of-the-art launch monitors to capture precise data on your swing dynamics.'
              },
              {
                icon: <Settings className="h-12 w-12 text-primary mb-6" />,
                title: 'Perfect Specifications',
                desc: 'Dial in the exact loft, lie, shaft flex, and grip size to match your physical profile and swing.'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-card p-8 rounded-lg border border-border text-center hover:border-primary/50 transition-colors">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="font-display text-xl font-bold uppercase mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold uppercase tracking-tight mb-8">The Fitting Process</h2>
              
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Interview & Assessment', desc: 'Discuss your goals, current equipment, and areas for improvement with a Master Fitter.' },
                  { step: '02', title: 'Baseline Testing', desc: 'Hit your current clubs to establish a performance baseline using advanced launch monitors.' },
                  { step: '03', title: 'Dynamic Testing', desc: 'Test various head and shaft combinations to find the optimal setup for your swing.' },
                  { step: '04', title: 'Final Recommendations', desc: 'Review the data and receive a detailed prescription for your custom-built equipment.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="font-display text-4xl font-black text-primary/20">{item.step}</span>
                    <div>
                      <h3 className="font-bold uppercase tracking-wider mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1535136104956-619ec3f00036?auto=format&fit=crop&q=80&w=1000" 
                  alt="Fitting Process" 
                  className="w-full h-full object-cover mix-blend-luminosity"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card p-8 border border-border rounded-lg shadow-2xl max-w-xs">
                <p className="font-display font-bold text-xl uppercase mb-2">"The difference was immediate."</p>
                <p className="text-sm text-muted-foreground">- John D., +2 Handicap</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container px-4 mx-auto max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Ready to Transform Your Game?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Find a TaylorMade fitting location near you and experience the difference custom equipment can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg uppercase font-bold tracking-wider h-14 px-8 text-primary">
              Find a Location
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
