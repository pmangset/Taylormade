import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-display font-bold text-2xl uppercase tracking-tight">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-accent rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
              <ShoppingBag className="h-16 w-16 opacity-20" />
              <p className="text-lg font-medium">Your cart is empty.</p>
              <Button 
                onClick={() => setIsCartOpen(false)}
                asChild
                className="mt-4"
              >
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-border pb-6">
                  <div className="h-24 w-24 bg-secondary rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-full w-full object-cover mix-blend-multiply"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-sm uppercase leading-tight">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border rounded-md">
                        <button 
                          className="p-2 hover:bg-accent transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          className="p-2 hover:bg-accent transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-secondary/50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-muted-foreground uppercase text-sm font-bold tracking-wider">Subtotal</span>
              <span className="font-display font-bold text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full h-14 text-lg uppercase tracking-wider font-bold" asChild>
              <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
                Checkout
              </Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
