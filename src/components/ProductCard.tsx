import React from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toast } = useToast();
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تمت إضافة ${product.name} إلى سلة التسوق`
    });
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'men': return 'رجالي';
      case 'women': return 'نسائي';
      case 'seasonal': return 'موسمي';
      case 'luxury': return 'فاخر';
      case 'bakhoor': return 'بخور';
      default: return category;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <Link to={`/products/${product.id}`} className="block relative">
        <div className="h-64 overflow-hidden bg-alsaada-stone/30">
          <div className="absolute top-0 left-0 bg-alsaada-gold text-white text-xs px-2 py-1 m-2 rounded-sm z-10">
            {getCategoryLabel(product.category)}
          </div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain object-center hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-5 arabic-text flex flex-col flex-grow border-t border-alsaada-gold/20">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-xl font-medium text-alsaada-dark mb-2 hover:text-alsaada-gold transition-colors">{product.name}</h3>
        </Link>
        <div className="flex justify-between items-center mb-3">
          <p className="text-alsaada-gold font-semibold">{product.price.toFixed(2)} ر.ع</p>
          <div className="flex text-yellow-500">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <button 
            onClick={handleAddToCart}
            className="bg-alsaada-gold hover:bg-alsaada-gold/90 text-white font-medium px-3 py-2 rounded transition-all shadow-md flex items-center justify-center gap-1"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            أضف للسلة
          </button>
          <Link 
            to={`/products/${product.id}`} 
            className="bg-alsaada-dark hover:bg-alsaada-dark/90 text-white font-medium px-3 py-2 rounded transition-all shadow-md flex items-center justify-center"
          >
            التفاصيل
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
