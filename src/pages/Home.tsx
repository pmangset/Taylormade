import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Home() {
  const featuredProducts = products.slice(0, 4);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitIntent) {
        setShowExitIntent(true);
        setHasShownExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownExitIntent]);

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatePresence>
        {showExitIntent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-card border border-border rounded-xl p-8 max-w-md w-full relative overflow-hidden"
            >
              <button 
                onClick={() => setShowExitIntent(false)}
                className="absolute top-4 right-4 p-2 hover:bg-accent rounded-full transition-colors z-10"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
              
              <h2 className="font-display text-3xl font-black uppercase tracking-tighter mb-4 mt-2">Wait! Don't Miss Out</h2>
              <p className="text-muted-foreground mb-6">
                Get 10% off your first order plus free shipping when you join Team TaylorMade.
              </p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowExitIntent(false); }}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary"
                  required
                />
                <Button type="submit" className="w-full h-12 uppercase font-bold tracking-wider text-sm">
                  Unlock My 10% Off
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-4">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?auto=format&fit=crop&q=80&w=2000" 
            alt="Golfer swinging" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto">
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            The New Standard
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.9]"
          >
            Forgiveness <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Redefined</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Experience 10K MOI. The highest MOI driver in TaylorMade history, designed for unprecedented forgiveness and straight distance.
          </motion.p>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg uppercase font-bold tracking-wider h-14 px-8" asChild>
              <Link to="/shop?category=drivers">Shop Drivers</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg uppercase font-bold tracking-wider h-14 px-8 border-2" asChild>
              <Link to="/fitting">Find Your Fit</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-border pb-6">
            <div>
              <h2 className="font-display text-4xl font-bold uppercase tracking-tight">Featured Gear</h2>
              <p className="text-muted-foreground mt-2">The latest innovations to elevate your game.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="w-full uppercase font-bold tracking-wider" asChild>
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Innovation</span>
              <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                Carbonwood <br/>Technology
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Twenty years of development marks the end of the titanium era. The all new 60X Carbon Twist Face is 44% lighter than an equivalent titanium face, while also being 11% larger than SIM2 and SIM2 Max drivers.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Optimal energy transfer for faster ball speeds',
                  'Nanotexture cover for ideal friction at impact',
                  'Asymmetric Inertia Generator for aerodynamic speed'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="lg" className="uppercase font-bold tracking-wider" asChild>
                <Link to="/tech">Explore The Tech</Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square rounded-full bg-primary/10 absolute -inset-4 blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1535136104956-619ec3f00036?auto=format&fit=crop&q=80&w=1000" 
                alt="Driver Technology" 
                className="relative z-10 rounded-lg shadow-2xl border border-border mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Segment Navigation */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container px-4 mx-auto text-center">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight mb-12">What's Your Goal?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Maximize Distance', desc: 'Find drivers and balls engineered for speed.', link: '/shop?category=drivers' },
              { title: 'Improve Accuracy', desc: 'Discover irons designed for precision and control.', link: '/shop?category=irons' },
              { title: 'Get Dialed In', desc: 'Book a custom fitting with a TaylorMade expert.', link: '/fitting' }
            ].map((segment, i) => (
              <Link 
                key={i} 
                to={segment.link}
                className="group p-8 border border-border rounded-lg bg-card hover:border-primary transition-all hover:-translate-y-1"
              >
                <h3 className="font-display text-2xl font-bold uppercase mb-4 group-hover:text-primary transition-colors">{segment.title}</h3>
                <p className="text-muted-foreground mb-6">{segment.desc}</p>
                <span className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary">
                  Explore <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Tour */}
      <section className="py-24 bg-black text-white relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-luminosity" />
        <div className="container relative z-10 px-4 mx-auto text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Team TaylorMade</span>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
            Trusted By The Best
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
            {/* Placeholder for player names/logos */}
            <div className="font-display text-2xl font-bold uppercase tracking-widest">Tiger Woods</div>
            <div className="font-display text-2xl font-bold uppercase tracking-widest">Rory McIlroy</div>
            <div className="font-display text-2xl font-bold uppercase tracking-widest">Scottie Scheffler</div>
            <div className="font-display text-2xl font-bold uppercase tracking-widest">Collin Morikawa</div>
          </div>
        </div>
      </section>
    </div>
  );
}
