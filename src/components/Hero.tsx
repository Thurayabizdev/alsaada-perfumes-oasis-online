import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const heroImages = [
  {
    src: "/lovable-uploads/30f48089-5157-484e-b0ea-3dba266635cd.png",
    alt: "Alsaada Perfume 1"
  },
  {
    src: "/lovable-uploads/3bd6d55b-a024-45fa-95d5-679135a18b99.png",
    alt: "Alsaada Perfume 2"
  },
  {
    src: "/lovable-uploads/2b217a3a-bc89-41d2-b8bf-c2e88486ecc8.png",
    alt: "Alsaada Perfume 3"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#F8F4E3] overflow-hidden">
      {/* Minimal pattern overlay */}
      <div className="absolute inset-0 z-0 minimal-pattern opacity-20"></div>
      <div className="container-custom relative z-10 flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-alsaada-dark mb-4">السعادة</h1>
        <h2 className="text-2xl md:text-3xl text-alsaada-gold font-normal mb-6">عطور فاخرة مستوحاة من عمان</h2>
        <p className="text-lg md:text-xl mb-8 text-alsaada-dark/80 leading-relaxed max-w-2xl mx-auto">
          استمتع بعبق التراث العربي الأصيل مع تشكيلتنا من العطور الفاخرة المصنوعة بأجود المكونات. عطورنا تجسد روح الشرق بلمسة عصرية فريدة.
        </p>
        <div className="flex flex-row-reverse justify-center items-center gap-0 mb-12 w-full max-w-md mx-auto">
          <Link 
            to="/products" 
            className="btn-gold inline-block py-3 px-8 rounded-none rounded-tr-md rounded-br-md text-lg font-bold"
          >
            تسوق الآن
          </Link>
          <Link 
            to="/about" 
            className="inline-block py-3 px-8 border border-alsaada-dark/20 hover:bg-alsaada-dark/5 text-alsaada-dark transition-all text-lg font-bold rounded-none rounded-tl-md rounded-bl-md"
          >
            اكتشف المزيد
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-0 w-full max-w-2xl mx-auto mt-4 bg-transparent">
          <div className="flex flex-col items-center justify-center py-6">
            <span className="text-3xl md:text-4xl font-bold text-alsaada-dark">+40</span>
            <span className="text-lg md:text-xl text-alsaada-dark/70 mt-2">منتج متنوع</span>
          </div>
          <div className="flex flex-col items-center justify-center py-6 border-x border-alsaada-gold/30">
            <span className="text-3xl md:text-4xl font-bold text-alsaada-dark">100%</span>
            <span className="text-lg md:text-xl text-alsaada-dark/70 mt-2">مكونات طبيعية</span>
          </div>
          <div className="flex flex-col items-center justify-center py-6">
            <span className="text-3xl md:text-4xl font-bold text-alsaada-dark">+20</span>
            <span className="text-lg md:text-xl text-alsaada-dark/70 mt-2">سنة خبرة</span>
          </div>
        </div>
      </div>
      {/* Minimal footer line */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-alsaada-gold/10"></div>
    </div>
  );
};

export default Hero;
