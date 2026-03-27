import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/button';
import { Filter, X } from 'lucide-react';

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['all', 'drivers', 'irons', 'putters', 'balls'];

  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (categoryParam && categoryParam !== 'all') {
      filtered = filtered.filter(p => p.category === categoryParam);
    }
    return filtered;
  }, [categoryParam]);

  const handleCategoryChange = (cat: string) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
    setIsFilterOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-border pb-6">
        <div>
          <h1 className="font-display text-5xl font-black uppercase tracking-tighter mb-2">
            {categoryParam ? categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1) : 'All Equipment'}
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
          </p>
        </div>
        
        <Button 
          variant="outline" 
          className="mt-4 md:mt-0 md:hidden uppercase font-bold tracking-wider"
          onClick={() => setIsFilterOpen(true)}
        >
          <Filter className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="font-display font-bold text-xl uppercase mb-6 tracking-tight">Categories</h3>
            <ul className="space-y-3">
              {categories.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                      (categoryParam === cat || (!categoryParam && cat === 'all'))
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 bg-background md:hidden flex flex-col animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-display font-bold text-xl uppercase">Filters</span>
              <button onClick={() => setIsFilterOpen(false)} className="p-2">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 flex-1 overflow-y-auto">
              <h3 className="font-bold uppercase mb-4 text-sm tracking-wider text-muted-foreground">Categories</h3>
              <ul className="space-y-4">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-lg font-medium uppercase tracking-wider w-full text-left border-b border-border pb-2 ${
                        (categoryParam === cat || (!categoryParam && cat === 'all'))
                          ? 'text-primary border-primary'
                          : 'text-foreground'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 border-t border-border">
              <Button className="w-full uppercase font-bold tracking-wider" onClick={() => setIsFilterOpen(false)}>
                Show {filteredProducts.length} Results
              </Button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24">
              <h2 className="font-display text-2xl font-bold uppercase mb-4">No products found</h2>
              <p className="text-muted-foreground mb-8">Try adjusting your filters or browse all products.</p>
              <Button onClick={() => handleCategoryChange('all')} className="uppercase font-bold tracking-wider">
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
