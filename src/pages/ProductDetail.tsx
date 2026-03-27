import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ShoppingCart, Star, ShieldCheck, Truck, ArrowLeft } from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-display text-4xl font-black uppercase mb-4">Product Not Found</h1>
        <Button asChild className="uppercase font-bold tracking-wider">
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-3 flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
          <Link to="/shop" className="hover:text-primary transition-colors flex items-center">
            <ArrowLeft className="mr-2 h-3 w-3" /> Shop
          </Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-primary transition-colors">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 pb-24 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary/50 rounded-lg overflow-hidden border border-border">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            {/* Thumbnails placeholder */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-secondary/30 rounded-md border border-border overflow-hidden cursor-pointer hover:border-primary transition-colors">
                  <img src={product.image} alt="" className="w-full h-full object-cover mix-blend-multiply opacity-50 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8 border-b border-border pb-8">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">(128 Reviews)</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                {product.name}
              </h1>
              
              <p className="text-3xl font-bold mb-6">${product.price.toFixed(2)}</p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-8">
              <h3 className="font-bold uppercase tracking-wider text-sm mb-4 text-muted-foreground">Key Features</h3>
              <ul className="space-y-2">
                {product.features?.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="mt-auto space-y-4 bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border rounded-md bg-background">
                  <button 
                    className="p-3 hover:bg-accent transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <button 
                    className="p-3 hover:bg-accent transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                {product.id === 'qi10-driver' ? (
                  <p className="text-sm font-bold uppercase tracking-wider text-destructive animate-pulse">Only 3 Left in Stock</p>
                ) : (
                  <p className="text-sm font-bold uppercase tracking-wider text-green-500">In Stock</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 h-14 text-lg uppercase font-bold tracking-wider hidden md:flex"
                  onClick={() => addToCart(product, quantity)}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="flex-1 h-14 text-lg uppercase font-bold tracking-wider border-2 hidden md:flex"
                  asChild
                >
                  <Link to="/fitting">Get Fitted</Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-border/50 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4" /> Free Shipping
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> 2-Year Warranty
                </div>
              </div>
            </div>

            {/* Upsell Section */}
            <div className="mt-8 p-6 bg-secondary/30 rounded-lg border border-border">
              <h3 className="font-display font-bold uppercase mb-4">Frequently Bought Together</h3>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-secondary rounded-md overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?auto=format&fit=crop&q=80&w=200" alt="TP5 Balls" className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm uppercase">TP5 Golf Balls (Dozen)</h4>
                  <p className="text-sm text-muted-foreground">$54.99</p>
                </div>
                <Button size="sm" variant="outline" className="uppercase text-xs font-bold" onClick={() => addToCart(products.find(p => p.id === 'tp5-balls')!)}>
                  Add
                </Button>
              </div>
            </div>

            {/* Specs & Tech Accordion */}
            <div className="mt-12">
              <Accordion type="single" collapsible className="w-full">
                {product.specs && (
                  <AccordionItem value="specs">
                    <AccordionTrigger className="text-lg font-bold uppercase tracking-wider">Specifications</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-2 gap-y-4 pt-4">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <div key={key} className="border-b border-border/50 pb-2">
                            <span className="text-muted-foreground text-xs uppercase tracking-wider block mb-1">{key}</span>
                            <span className="font-bold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )}
                <AccordionItem value="tech">
                  <AccordionTrigger className="text-lg font-bold uppercase tracking-wider">Technology</AccordionTrigger>
                  <AccordionContent>
                    <p className="pt-4 text-muted-foreground leading-relaxed">
                      Engineered with advanced materials and precision manufacturing to deliver optimal performance. 
                      Our proprietary technologies work in harmony to maximize speed, forgiveness, and feel.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reviews">
                  <AccordionTrigger className="text-lg font-bold uppercase tracking-wider">Reviews</AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-4xl font-bold">4.8</span>
                        <div className="flex flex-col">
                          <div className="flex text-primary">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                          </div>
                          <span className="text-xs text-muted-foreground">Based on 128 reviews</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="uppercase text-xs font-bold tracking-wider">Write a Review</Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t border-border z-40 flex gap-4">
        <Button 
          size="lg" 
          className="flex-1 h-12 text-sm uppercase font-bold tracking-wider"
          onClick={() => addToCart(product, quantity)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
