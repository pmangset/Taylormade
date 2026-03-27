import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { name: 'Drivers', href: '/shop?category=drivers' },
    { name: 'Irons', href: '/shop?category=irons' },
    { name: 'Putters', href: '/shop?category=putters' },
    { name: 'Balls', href: '/shop?category=balls' },
    { name: 'Custom Fitting', href: '/fitting' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 -ml-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display font-bold text-2xl tracking-tighter uppercase">
            TaylorMade
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-foreground hover:text-primary transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button
            className="text-foreground hover:text-primary transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-display font-bold text-xl uppercase">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-medium uppercase border-b border-border pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4">
              <Button className="w-full" asChild>
                <Link to="/fitting" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Custom Fitting
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
