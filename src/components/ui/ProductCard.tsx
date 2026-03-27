import { Link } from 'react-router-dom';
import { Product, useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col bg-card border border-border rounded-lg overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <Link to={`/product/${product.id}`} className="aspect-square relative overflow-hidden bg-secondary/50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
      </Link>
      
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-display font-bold text-lg uppercase leading-tight group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>
        
        <div className="flex gap-2 mt-auto">
          <Button 
            className="flex-1 uppercase font-bold tracking-wider text-xs"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
