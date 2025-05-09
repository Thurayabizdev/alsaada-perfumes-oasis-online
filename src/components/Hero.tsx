
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-[#F8F4E3] overflow-hidden">
      {/* Minimal pattern overlay */}
      <div className="absolute inset-0 z-0 minimal-pattern opacity-20"></div>
      
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-right order-2 lg:order-1">
          <div className="space-y-6 arabic-text">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-alsaada-dark">
              السعادة
              <span className="block text-xl md:text-2xl lg:text-3xl mt-2 text-alsaada-gold font-normal">عطور فاخرة مستوحاة من عمان</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-6 text-alsaada-dark/80 leading-relaxed">
              استمتع بعبق التراث العربي الأصيل مع تشكيلتنا من العطور الفاخرة المصنوعة بأجود المكونات. 
              عطورنا تجسد روح الشرق بلمسة عصرية فريدة.
            </p>
            
            <div className="space-x-4 rtl:space-x-reverse">
              <Link 
                to="/products" 
                className="btn-gold inline-block py-3 px-6"
              >
                تسوق الآن
              </Link>
              <Link 
                to="/about" 
                className="inline-block py-3 px-6 border border-alsaada-dark/20 hover:bg-alsaada-dark/5 text-alsaada-dark transition-all"
              >
                اكتشف المزيد
              </Link>
            </div>
            
            <div className="flex justify-center lg:justify-end mt-8">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-alsaada-dark">40+</p>
                  <p className="text-sm text-alsaada-dark/60 mt-1">منتج متنوع</p>
                </div>
                <div className="h-12 w-px bg-alsaada-dark/10"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-alsaada-dark">100%</p>
                  <p className="text-sm text-alsaada-dark/60 mt-1">مكونات طبيعية</p>
                </div>
                <div className="h-12 w-px bg-alsaada-dark/10"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-alsaada-dark">20+</p>
                  <p className="text-sm text-alsaada-dark/60 mt-1">سنة خبرة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative order-1 lg:order-2">
          <div className="relative flex justify-center z-10">
            <img 
              src="/lovable-uploads/30f48089-5157-484e-b0ea-3dba266635cd.png" 
              alt="Alsaada Perfume" 
              className="h-96 object-contain"
            />
            
            {/* Small product showcases */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white p-2">
              <img src="/lovable-uploads/3bd6d55b-a024-45fa-95d5-679135a18b99.png" alt="Perfume Collection" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white p-2">
              <img src="/lovable-uploads/2b217a3a-bc89-41d2-b8bf-c2e88486ecc8.png" alt="Perfume Collection" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimal footer line */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-alsaada-gold/10"></div>
    </div>
  );
};

export default Hero;
