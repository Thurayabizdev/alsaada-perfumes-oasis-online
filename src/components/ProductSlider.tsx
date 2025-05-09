
import React from "react";
import { Product } from "@/components/ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const { toast } = useToast();
  
  const addToCart = (product: Product) => {
    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تمت إضافة ${product.name} إلى سلة التسوق`
    });
  };
  
  return (
    <div className="relative py-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="h-48 overflow-hidden bg-alsaada-stone/30 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain object-center hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-0 left-0 bg-alsaada-gold text-white text-xs px-2 py-1 m-2 rounded">
                    {product.category === 'men' && 'رجالي'}
                    {product.category === 'women' && 'نسائي'}
                    {product.category === 'seasonal' && 'موسمي'}
                    {product.category === 'luxury' && 'فاخر'}
                  </div>
                </div>
                
                <div className="p-4 arabic-text flex-grow flex flex-col">
                  <Link to={`/products/${product.id}`} className="block">
                    <h3 className="text-lg font-medium text-alsaada-dark mb-1 hover:text-alsaada-gold transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-alsaada-gold font-semibold mb-2">{product.price.toFixed(2)} ر.ع</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-alsaada-dark text-white py-2 rounded-md hover:bg-alsaada-dark/90 transition-colors mt-auto flex items-center justify-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                    أضف إلى السلة
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-1" />
          <CarouselNext className="right-1" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductSlider;
