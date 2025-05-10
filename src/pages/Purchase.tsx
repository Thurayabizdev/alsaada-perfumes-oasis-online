import React, { useState } from "react";
import { products as allProducts } from "@/data/products";
import { Product } from "@/components/ProductCard";

const getRandomSuggestions = (excludeIds: string[], count = 4) => {
  const filtered = allProducts.filter(p => !excludeIds.includes(p.id));
  return filtered.sort(() => 0.5 - Math.random()).slice(0, count);
};

const Purchase: React.FC = () => {
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const found = prev.find(item => item.product.id === product.id);
      if (found) {
        return prev.map(item =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { product, qty: 1 }];
      }
    });
  };

  const total = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const suggestions = getRandomSuggestions(cart.map(item => item.product.id));

  return (
    <div className="min-h-screen bg-[#faf6ea] py-12">
      <div className="container-custom max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-alsaada-dark">شراء المنتجات</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4 text-alsaada-gold">المنتجات</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {allProducts.slice(0, 9).map(product => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow border border-transparent hover:border-alsaada-gold"
                  onClick={() => addToCart(product)}
                  title="أضف إلى السلة"
                >
                  <img src={product.image} alt={product.name} className="h-28 object-contain mb-2" />
                  <div className="text-center arabic-text">
                    <h3 className="text-base font-semibold text-alsaada-dark mb-1">{product.name}</h3>
                    <p className="text-alsaada-gold font-bold text-sm mb-1">{product.price.toFixed(2)} ر.ع</p>
                  </div>
                  <span className="text-xs text-gray-400">اضغط للإضافة</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-alsaada-dark">سلة الشراء</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center">لم تقم بإضافة أي منتجات بعد</p>
            ) : (
              <ul className="mb-4 divide-y divide-alsaada-gold/20">
                {cart.map(item => (
                  <li key={item.product.id} className="flex justify-between items-center py-2">
                    <span className="text-alsaada-dark">{item.product.name} × {item.qty}</span>
                    <span className="text-alsaada-gold font-bold">{(item.product.price * item.qty).toFixed(2)} ر.ع</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto pt-4 border-t border-alsaada-gold/20">
              <div className="flex justify-between text-lg font-bold">
                <span>المجموع:</span>
                <span className="text-alsaada-gold">{total.toFixed(2)} ر.ع</span>
              </div>
              <button className="w-full btn-gold mt-4">إتمام الشراء</button>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-alsaada-gold">منتجات مقترحة</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {suggestions.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow border border-transparent hover:border-alsaada-gold"
                onClick={() => addToCart(product)}
                title="أضف إلى السلة"
              >
                <img src={product.image} alt={product.name} className="h-20 object-contain mb-2" />
                <div className="text-center arabic-text">
                  <h3 className="text-sm font-semibold text-alsaada-dark mb-1">{product.name}</h3>
                  <p className="text-alsaada-gold font-bold text-xs mb-1">{product.price.toFixed(2)} ر.ع</p>
                </div>
                <span className="text-xs text-gray-400">اضغط للإضافة</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase; 