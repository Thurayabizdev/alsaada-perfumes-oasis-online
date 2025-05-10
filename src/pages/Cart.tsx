import React from "react";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

const Cart: React.FC = () => {
  const { cart, updateQty, removeFromCart, addToCart, allProducts } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-[#faf6ea] py-24">
      <div className="container-custom max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-alsaada-dark arabic-text">عربة التسوق</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">سلة التسوق فارغة</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow-md p-6">
            <table className="w-full text-center">
              <thead>
                <tr className="border-b border-alsaada-gold/20">
                  <th className="py-2">المنتج</th>
                  <th className="py-2">السعر</th>
                  <th className="py-2">الكمية</th>
                  <th className="py-2">المجموع</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.product.id} className="border-b border-alsaada-gold/10">
                    <td className="py-4 flex items-center gap-4 justify-center">
                      <img src={item.product.image} alt={item.product.name} className="h-12 w-12 object-contain rounded" />
                      <span className="arabic-text text-lg">{item.product.name}</span>
                    </td>
                    <td className="py-4 text-alsaada-gold font-bold">{item.product.price.toFixed(3)} ر.ع</td>
                    <td className="py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button onClick={() => updateQty(item.product.id, item.qty - 1)} className="w-8 h-8 rounded bg-alsaada-cream text-xl font-bold hover:bg-alsaada-gold hover:text-white">-</button>
                        <span className="w-8 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.product.id, item.qty + 1)} className="w-8 h-8 rounded bg-alsaada-cream text-xl font-bold hover:bg-alsaada-gold hover:text-white">+</button>
                      </div>
                    </td>
                    <td className="py-4 text-alsaada-dark font-bold">{(item.product.price * item.qty).toFixed(3)} ر.ع</td>
                    <td className="py-4">
                      <button onClick={() => removeFromCart(item.product.id)} className="text-red-500 hover:underline">إزالة</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-col items-end mt-6">
              <div className="text-xl font-bold mb-4">المجموع الفرعي: <span className="text-alsaada-gold">{subtotal.toFixed(3)} ر.ع</span></div>
              <button className="btn-gold px-8 py-3 text-lg">المتابعة لإتمام الطلب</button>
            </div>
          </div>
        )}
      </div>
      <div className="container-custom max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6 text-alsaada-dark arabic-text">منتجات إضافية</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {allProducts.slice(0, 6).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart; 