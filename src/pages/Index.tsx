
import React from "react";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">منتجات مميزة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="relative rounded-lg overflow-hidden shadow-md group">
            <img 
              src="/lovable-uploads/10999897-0b63-4970-b697-d8e24ff2953f.png" 
              alt="Featured Perfume" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-alsaada-dark/70 to-transparent flex items-end">
              <div className="p-6 arabic-text">
                <h3 className="text-white text-xl font-semibold mb-2">المجاني</h3>
                <p className="text-white/80 mb-4">عطر فاخر بمكونات نادرة</p>
                <Link to="/products/m1" className="inline-block bg-alsaada-gold text-white px-4 py-2 rounded">
                  اكتشف المزيد
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-md group">
            <img 
              src="/lovable-uploads/a3c85a27-c6c1-4a2f-8d8a-9d60aa0c256c.png" 
              alt="Featured Perfume" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-alsaada-dark/70 to-transparent flex items-end">
              <div className="p-6 arabic-text">
                <h3 className="text-white text-xl font-semibold mb-2">عبق</h3>
                <p className="text-white/80 mb-4">اكتشف الرائحة الشرقية الأصيلة</p>
                <Link to="/products/w1" className="inline-block bg-alsaada-gold text-white px-4 py-2 rounded">
                  اكتشف المزيد
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-md group">
            <img 
              src="/lovable-uploads/9d652ae6-1315-410c-b077-2a197db09bc7.png" 
              alt="Bakhoor Collection" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-alsaada-dark/70 to-transparent flex items-end">
              <div className="p-6 arabic-text">
                <h3 className="text-white text-xl font-semibold mb-2">مجموعة البخور</h3>
                <p className="text-white/80 mb-4">أجود أنواع البخور العماني الأصيل</p>
                <Link to="/products" className="inline-block bg-alsaada-gold text-white px-4 py-2 rounded">
                  اكتشف المزيد
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-alsaada-cream/50">
      <div className="container-custom">
        <h2 className="section-title text-center">ما يقوله عملاؤنا</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((testimonial) => (
            <div key={testimonial} className="bg-white p-6 rounded-lg shadow-md arabic-text">
              <div className="flex items-center text-alsaada-gold mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-alsaada-dark mb-4">
                عطور السعادة هي الأفضل! الروائح أصيلة وتدوم طويلاً، والتغليف فاخر جداً. سأظل زبوناً دائماً.
              </p>
              <p className="font-bold text-alsaada-dark">أحمد - مسقط</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <Testimonials />
    </div>
  );
};

export default Index;
