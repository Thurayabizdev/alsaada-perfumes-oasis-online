
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-alsaada-cream to-alsaada-stone overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-alsaada-gold/5 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-alsaada-gold/10 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-alsaada-dark/10 to-transparent"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMCA2Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02em0tMTggNmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMCA2Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02eiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PHBhdGggZD0iTTI0IDYwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2em0wLTE4YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2em0tMTggNmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMC0xOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMTggMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-right order-2 lg:order-1">
          <div className="space-y-6 animate-slide-up arabic-text">
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
                className="btn-gold inline-block py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition-all"
              >
                تسوق الآن
              </Link>
              <Link 
                to="/about" 
                className="inline-block py-3 px-6 rounded-md border border-alsaada-dark/20 hover:bg-alsaada-dark/5 text-alsaada-dark transition-all"
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
        
        <div className="relative order-1 lg:order-2 animate-fade-in">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-alsaada-gold/20 rounded-full blur-3xl"></div>
          <div className="relative flex justify-center z-10">
            <img 
              src="/lovable-uploads/30f48089-5157-484e-b0ea-3dba266635cd.png" 
              alt="Alsaada Perfume" 
              className="h-96 object-contain"
            />
            
            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full overflow-hidden border-4 border-white/50 shadow-xl animate-bounce" style={{ animationDuration: "5s" }}>
              <img src="/lovable-uploads/3bd6d55b-a024-45fa-95d5-679135a18b99.png" alt="Perfume Collection" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full overflow-hidden border-4 border-white/50 shadow-xl animate-bounce" style={{ animationDuration: "7s", animationDelay: "0.5s" }}>
              <img src="/lovable-uploads/2b217a3a-bc89-41d2-b8bf-c2e88486ecc8.png" alt="Perfume Collection" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
          <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
