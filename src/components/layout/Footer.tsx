import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-bold text-xl uppercase mb-4">TaylorMade</h3>
            <p className="text-muted-foreground text-sm">
              Performance-driven golf equipment designed to help you play your best.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase mb-4 text-sm tracking-wider">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/shop?category=drivers" className="hover:text-primary transition-colors">Drivers</Link></li>
              <li><Link to="/shop?category=irons" className="hover:text-primary transition-colors">Irons</Link></li>
              <li><Link to="/shop?category=putters" className="hover:text-primary transition-colors">Putters</Link></li>
              <li><Link to="/shop?category=balls" className="hover:text-primary transition-colors">Golf Balls</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-4 text-sm tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Warranty</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Track Order</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-4 text-sm tracking-wider">Stay Connected</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Sign up for early access to new products, exclusive offers, and more.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background border border-border px-3 py-2 text-sm w-full focus:outline-none focus:border-primary"
              />
              <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase hover:bg-primary/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TaylorMade Golf Company, Inc.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
