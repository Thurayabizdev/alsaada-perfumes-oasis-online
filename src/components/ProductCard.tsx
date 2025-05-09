
import React from "react";
import { useToast } from "@/hooks/use-toast";

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
  
  const addToCart = () => {
    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تمت إضافة ${product.name} إلى سلة التسوق`
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-64 overflow-hidden bg-alsaada-stone/30">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain object-center hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4 arabic-text">
        <h3 className="text-xl font-medium text-alsaada-dark mb-2">{product.name}</h3>
        <p className="text-alsaada-gold font-semibold mb-3">{product.price.toFixed(2)} ر.ع</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <button 
          onClick={addToCart}
          className="w-full btn-gold"
        >
          أضف إلى السلة
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
