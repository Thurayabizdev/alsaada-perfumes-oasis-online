
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-alsaada-cream to-alsaada-stone overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-alsaada-dark/10 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-right order-2 lg:order-1 animate-slide-up arabic-text">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-alsaada-dark mb-6">
            السعادة
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-alsaada-dark/80">
            عطور فاخرة مستوحاة من جوهر عُمان
          </p>
          <p className="mb-8 text-alsaada-dark/70">
            استمتع بعبق التراث العربي الأصيل مع تشكيلتنا من العطور الفاخرة المصنوعة بأجود المكونات. 
            عطورنا تجسد روح الشرق بلمسة عصرية فريدة.
          </p>
          <Link to="/products" className="btn-gold inline-block">
            تسوق الآن
          </Link>
        </div>
        
        <div className="relative order-1 lg:order-2 animate-fade-in">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-alsaada-gold/20 rounded-full blur-3xl"></div>
          <div className="relative flex justify-center">
            <img 
              src="/lovable-uploads/10999897-0b63-4970-b697-d8e24ff2953f.png" 
              alt="Alsaada Perfume" 
              className="h-96 object-contain relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
