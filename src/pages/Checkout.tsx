import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock } from 'lucide-react';

export function Checkout() {
  const { items, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-display text-4xl font-black uppercase mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Add some items to your cart to proceed to checkout.</p>
        <Button asChild className="uppercase font-bold tracking-wider">
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Checkout Form */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase mb-6">Contact Information</h2>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary"
                />
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="offers" className="rounded border-border text-primary focus:ring-primary" />
                  <label htmlFor="offers" className="text-sm text-muted-foreground">Email me with news and offers</label>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold uppercase mb-6">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First name" 
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary"
                />
                <input 
                  type="text" 
                  placeholder="Last name" 
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary"
                />
                <input 
                  type="text" 
                  placeholder="Address" 
                  className="col-span-2 w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary"
                />
                <input 
                  type="text" 
                  placeholder="Apartment, suite, etc. (optional)" 
                  className="col-span-2 w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary"
                />
                <input 
                  type="text" 
                  placeholder="City" 
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary"
                />
                <input 
                  type="text" 
                  placeholder="State" 
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary"
                />
                <input 
                  type="text" 
                  placeholder="ZIP code" 
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <Button size="lg" className="w-full h-14 text-lg uppercase font-bold tracking-wider">
              Continue to Shipping
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h2 className="font-display text-xl font-bold uppercase mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-16 w-16 bg-secondary rounded-md overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                      <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 flex justify-between items-center">
                      <h3 className="font-bold text-sm uppercase">{item.name}</h3>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-border pt-6 mb-6 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Calculated at next step</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Taxes</span>
                  <span>Calculated at next step</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-border pt-6 mb-8">
                <span className="font-display font-bold text-xl uppercase">Total</span>
                <span className="font-display font-bold text-2xl">
                  <span className="text-sm text-muted-foreground font-sans mr-2">USD</span>
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
                <Lock className="h-3 w-3" /> Secure Checkout
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
