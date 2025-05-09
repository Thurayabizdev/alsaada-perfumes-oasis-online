
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CartButton = () => {
  const [cartItems, setCartItems] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { toast } = useToast();

  const toggleCart = () => {
    if (cartItems === 0) {
      toast({
        title: "السلة فارغة",
        description: "لم تقم بإضافة أي منتجات بعد",
      });
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleCart}
        className="relative flex items-center justify-center p-2 text-alsaada-dark hover:text-alsaada-gold transition-colors"
        aria-label="عربة التسوق"
      >
        <ShoppingCart className="w-6 h-6" />
        {cartItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-alsaada-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartItems}
          </span>
        )}
      </button>

      {isOpen && cartItems > 0 && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-4 px-6 z-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">سلة التسوق</h3>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="space-y-4">
            <p className="text-center text-gray-500">أضف بعض المنتجات للشراء</p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between mb-4">
              <span>المجموع:</span>
              <span className="font-semibold">0.00 ر.ع</span>
            </div>
            <button className="w-full btn-gold">
              إتمام الشراء
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartButton;
