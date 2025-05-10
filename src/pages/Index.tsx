import React from "react";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import ProductSlider from "@/components/ProductSlider";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductsByCategory } from "@/data/products";
import Cart from "./Cart";

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

const ProductCategories = () => {
  return (
    <section className="py-16 bg-alsaada-cream/30">
      <div className="container-custom">
        <h2 className="section-title text-center mb-8">تسوق حسب الفئة</h2>
        
        <Tabs defaultValue="men" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="bg-alsaada-cream/60 p-1">
              <TabsTrigger value="men" className="arabic-text px-6">عطور رجالية</TabsTrigger>
              <TabsTrigger value="women" className="arabic-text px-6">عطور نسائية</TabsTrigger>
              <TabsTrigger value="seasonal" className="arabic-text px-6">عطور موسمية</TabsTrigger>
              <TabsTrigger value="luxury" className="arabic-text px-6">عطور فاخرة</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="men" className="mt-6">
            <ProductSlider products={getProductsByCategory('men').slice(0, 6)} />
            <div className="text-center mt-8">
              <Link to="/products?category=men" className="btn-gold inline-block arabic-text">عرض جميع العطور الرجالية</Link>
            </div>
          </TabsContent>
          
          <TabsContent value="women" className="mt-6">
            <ProductSlider products={getProductsByCategory('women').slice(0, 6)} />
            <div className="text-center mt-8">
              <Link to="/products?category=women" className="btn-gold inline-block arabic-text">عرض جميع العطور النسائية</Link>
            </div>
          </TabsContent>
          
          <TabsContent value="seasonal" className="mt-6">
            <ProductSlider products={getProductsByCategory('seasonal').slice(0, 6)} />
            <div className="text-center mt-8">
              <Link to="/products?category=seasonal" className="btn-gold inline-block arabic-text">عرض جميع العطور الموسمية</Link>
            </div>
          </TabsContent>
          
          <TabsContent value="luxury" className="mt-6">
            <ProductSlider products={getProductsByCategory('luxury').slice(0, 6)} />
            <div className="text-center mt-8">
              <Link to="/products?category=luxury" className="btn-gold inline-block arabic-text">عرض جميع العطور الفاخرة</Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const BakhoorSection = () => {
  return (
    <section className="py-16 bg-alsaada-stone/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title arabic-text">بخور فاخر</h2>
            <p className="mb-6 arabic-text text-alsaada-dark/80">
              اكتشف مجموعتنا المميزة من البخور العماني الأصيل، المصنوع من أجود المكونات
              الطبيعية. استمتع بعبق التراث العربي في منزلك مع بخور السعادة.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-md arabic-text">
                <h4 className="font-semibold text-lg mb-2">بخور عماني</h4>
                <p className="text-sm text-alsaada-dark/70">أجود أنواع البخور العماني التقليدي</p>
              </div>
              <div className="bg-white p-4 rounded-md arabic-text">
                <h4 className="font-semibold text-lg mb-2">بخور المعمول</h4>
                <p className="text-sm text-alsaada-dark/70">معمول بخور فاخر بنكهات متعددة</p>
              </div>
              <div className="bg-white p-4 rounded-md arabic-text">
                <h4 className="font-semibold text-lg mb-2">دخون السعادة</h4>
                <p className="text-sm text-alsaada-dark/70">تشكيلة فاخرة من الدخون الإماراتي</p>
              </div>
              <div className="bg-white p-4 rounded-md arabic-text">
                <h4 className="font-semibold text-lg mb-2">عود طبيعي</h4>
                <p className="text-sm text-alsaada-dark/70">عود طبيعي 100% من أجود الأنواع</p>
              </div>
            </div>
            <Link to="/products?category=bakhoor" className="btn-gold inline-block arabic-text">
              تسوق البخور الآن
            </Link>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/60268b61-0056-4fd9-8445-517b487b58f2.png" 
                  alt="Bakhoor Collection" 
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/e185e6d6-2a0c-4bb6-9c46-c8ca48551191.png" 
                  alt="Frankincense Collection" 
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden col-span-2">
                <img 
                  src="/lovable-uploads/4f997b93-cf00-430e-9771-92fe77552b7b.png" 
                  alt="Luxury Bakhoor" 
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GreenCollection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-alsaada-stone/20 opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <Card className="overflow-hidden border-none shadow-xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-2 gap-1">
                  <div className="overflow-hidden aspect-square">
                    <img 
                      src="/lovable-uploads/30f48089-5157-484e-b0ea-3dba266635cd.png" 
                      alt="Green Collection" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden aspect-square">
                    <img 
                      src="/lovable-uploads/2b217a3a-bc89-41d2-b8bf-c2e88486ecc8.png" 
                      alt="Green Collection" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden aspect-square">
                    <img 
                      src="/lovable-uploads/3bd6d55b-a024-45fa-95d5-679135a18b99.png" 
                      alt="Green Collection" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden aspect-square bg-gradient-to-br from-alsaada-gold/20 to-alsaada-gold/40 flex items-center justify-center">
                    <div className="text-center arabic-text">
                      <h4 className="text-xl font-bold text-alsaada-dark">المجموعة الخضراء</h4>
                      <p className="text-sm text-alsaada-dark/70">اكتشف المزيد</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-1/2">
            <div className="arabic-text">
              <h2 className="section-title">المجموعة الخضراء الفاخرة</h2>
              <p className="mb-6 text-alsaada-dark/80">
                تقدم السعادة مجموعتها الخضراء الفريدة، المستوحاة من جمال الطبيعة العمانية.
                عطور فاخرة بتصميم أنيق وعبوات زجاجية خضراء مميزة، مصنوعة من أفخر المكونات
                وتدوم طويلاً. تعكس هذه المجموعة الأناقة والرقي وتضيف لمسة من التميز.
              </p>
              
              <div className="bg-alsaada-cream/50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-lg mb-3">مميزات المجموعة الخضراء:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-alsaada-gold"></span>
                    <span>عطور فاخرة تدوم طويلاً</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-alsaada-gold"></span>
                    <span>زجاجات أنيقة بتصميم عصري</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-alsaada-gold"></span>
                    <span>مكونات طبيعية نادرة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-alsaada-gold"></span>
                    <span>تغليف فاخر مناسب للهدايا</span>
                  </li>
                </ul>
              </div>
              
              <Link to="/products?collection=green" className="btn-gold inline-block">
                تسوق المجموعة الخضراء
              </Link>
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
        <h2 className="section-title text-center mb-12">ما يقوله عملاؤنا</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md arabic-text relative">
            <div className="absolute top-0 right-0 w-12 h-12 bg-alsaada-gold/10 rounded-bl-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-alsaada-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="flex items-center text-alsaada-gold mb-4 mt-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-alsaada-dark mb-4">
              عطور السعادة هي الأفضل! الروائح أصيلة وتدوم طويلاً، والتغليف فاخر جداً. سأظل زبوناً دائماً.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-alsaada-gold/20 rounded-full flex items-center justify-center text-alsaada-gold font-bold">
                أ
              </div>
              <div className="ml-3">
                <p className="font-bold text-alsaada-dark">أحمد</p>
                <p className="text-sm text-alsaada-dark/60">مسقط</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md arabic-text relative">
            <div className="absolute top-0 right-0 w-12 h-12 bg-alsaada-gold/10 rounded-bl-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-alsaada-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="flex items-center text-alsaada-gold mb-4 mt-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-alsaada-dark mb-4">
              أحببت مجموعة البخور، رائحة مميزة ومنعشة تدوم لفترة طويلة. التغليف فاخر ومثالي للهدايا.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-alsaada-gold/20 rounded-full flex items-center justify-center text-alsaada-gold font-bold">
                س
              </div>
              <div className="ml-3">
                <p className="font-bold text-alsaada-dark">سارة</p>
                <p className="text-sm text-alsaada-dark/60">دبي</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md arabic-text relative">
            <div className="absolute top-0 right-0 w-12 h-12 bg-alsaada-gold/10 rounded-bl-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-alsaada-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="flex items-center text-alsaada-gold mb-4 mt-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-alsaada-dark mb-4">
              المجموعة الخضراء رائعة! لقد اشتريت ثلاثة عطور منها وجميعها مميزة ورائحتها تدوم لساعات طويلة.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-alsaada-gold/20 rounded-full flex items-center justify-center text-alsaada-gold font-bold">
                م
              </div>
              <div className="ml-3">
                <p className="font-bold text-alsaada-dark">محمد</p>
                <p className="text-sm text-alsaada-dark/60">الرياض</p>
              </div>
            </div>
          </div>
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
      <ProductCategories />
      <GreenCollection />
      <BakhoorSection />
      <FeaturedProducts />
      <Testimonials />
    </div>
  );
};

export default Index;
