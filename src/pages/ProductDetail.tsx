import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductById, getProductsByCategory } from "@/data/products";
import { Product } from "@/components/ProductCard";
import { useToast } from "@/hooks/use-toast";
import ProductSlider from "@/components/ProductSlider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | undefined>();
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    if (!productId) return;
    
    const foundProduct = getProductById(productId);
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Get related products from same category
      const related = getProductById(productId + "_related");
      // Fix: Check if related is an array, otherwise use an empty array
      if (Array.isArray(related)) {
        setRelatedProducts(related);
      } else {
        // If related products aren't available, set empty array
        setRelatedProducts([]);
      }
    }
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [productId]);
  
  const handleAddToCart = () => {
    if (!product) return;
    
    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تمت إضافة ${product.name} (${quantity}) إلى سلة التسوق`
    });
  };
  
  const getCategoryLabel = (category?: string) => {
    if (!category) return "";
    
    switch (category) {
      case 'men': return 'عطور رجالية';
      case 'women': return 'عطور نسائية';
      case 'seasonal': return 'عطور موسمية';
      case 'luxury': return 'عطور فاخرة';
      case 'bakhoor': return 'بخور';
      default: return category;
    }
  };
  
  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">المنتج غير موجود</h2>
          <button
            onClick={() => navigate('/products')}
            className="btn-gold"
          >
            العودة إلى المنتجات
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="mb-6 arabic-text flex items-center text-sm text-alsaada-dark/60">
          <Link to="/" className="hover:text-alsaada-gold">الرئيسية</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-alsaada-gold">المنتجات</Link>
          <span className="mx-2">/</span>
          <Link to={`/products?category=${product.category}`} className="hover:text-alsaada-gold">{getCategoryLabel(product.category)}</Link>
          <span className="mx-2">/</span>
          <span className="text-alsaada-gold">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative bg-alsaada-stone/20 h-[500px] flex items-center justify-center p-8">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-full max-w-full object-contain"
              />
              <div className="absolute top-4 left-4 bg-alsaada-gold text-white py-1 px-3 rounded-full text-sm">
                {getCategoryLabel(product.category)}
              </div>
            </div>
            <div className="p-4 bg-alsaada-cream/30">
              <div className="flex justify-center space-x-2 rtl:space-x-reverse">
                <button className="w-3 h-3 rounded-full bg-alsaada-gold"></button>
                <button className="w-3 h-3 rounded-full bg-alsaada-gold/50"></button>
                <button className="w-3 h-3 rounded-full bg-alsaada-gold/50"></button>
              </div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="arabic-text">
            <h1 className="text-3xl font-bold mb-2 text-alsaada-dark">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <span className="text-sm mr-2 text-alsaada-dark/70">(18 تقييم)</span>
              </div>
              <span className="text-green-600 bg-green-100 px-2 py-1 rounded-md text-xs">
                متوفر
              </span>
            </div>
            
            <div className="mb-6">
              <p className="text-3xl text-alsaada-gold font-semibold mb-2">{product.price.toFixed(2)} ر.ع</p>
              <p className="text-alsaada-dark/70">السعر شامل الضريبة</p>
            </div>
            
            <p className="text-alsaada-dark mb-6 leading-relaxed">
              {product.description}
            </p>
            
            <div className="mb-8">
              <h3 className="font-semibold mb-2">المميزات:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-alsaada-gold ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  منتج أصلي 100%
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-alsaada-gold ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  رائحة تدوم طويلاً
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-alsaada-gold ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  تغليف فاخر
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-alsaada-gold ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  شحن مجاني للطلبات فوق 50 ر.ع
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="flex items-center ml-8">
                  <button 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="w-10 h-10 rounded-r-md bg-alsaada-cream flex items-center justify-center hover:bg-alsaada-gold hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                    </svg>
                  </button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-14 h-10 text-center border-y border-alsaada-cream" 
                  />
                  <button 
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="w-10 h-10 rounded-l-md bg-alsaada-cream flex items-center justify-center hover:bg-alsaada-gold hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                  </button>
                </div>
                <p className="text-alsaada-dark/70">متوفر في المخزون</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={handleAddToCart}
                  className="btn-gold flex items-center justify-center gap-2 py-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                  أضف إلى السلة
                </button>
                <button
                  className="bg-alsaada-dark text-white py-3 rounded-md hover:bg-alsaada-dark/90 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  أضف للمفضلة
                </button>
              </div>
            </div>
            
            <div className="border-t border-alsaada-cream pt-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-alsaada-gold ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-sm">شحن سريع (2-4 أيام)</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-alsaada-gold ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                  <span className="text-sm">دفع آمن</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-alsaada-gold ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <span className="text-sm">ضمان الجودة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product details tabs */}
        <div className="mb-16">
          <Tabs defaultValue="details" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="bg-alsaada-cream/60">
                <TabsTrigger value="details" className="arabic-text px-6">تفاصيل المنتج</TabsTrigger>
                <TabsTrigger value="reviews" className="arabic-text px-6">التقييمات</TabsTrigger>
                <TabsTrigger value="shipping" className="arabic-text px-6">الشحن والإرجاع</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="details" className="bg-white p-6 rounded-lg shadow-md arabic-text">
              <h3 className="text-xl font-semibold mb-4">تفاصيل المنتج</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">
                    {product.description}
                  </p>
                  <p>
                    عطر السعادة {product.name} يتميز بتركيبته الفريدة التي تدوم طويلاً، ويأتي في عبوة أنيقة تعكس فخامة وجودة المنتج.
                    يتم تصنيع جميع عطورنا باستخدام أجود المكونات الطبيعية المستوحاة من التراث العماني الأصيل.
                  </p>
                </div>
                <div className="bg-alsaada-cream/30 p-4 rounded-md">
                  <h4 className="font-semibold mb-3">مواصفات المنتج:</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-alsaada-dark/70">الفئة:</span>
                      <span>{getCategoryLabel(product.category)}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-alsaada-dark/70">الحجم:</span>
                      <span>100 مل</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-alsaada-dark/70">النوع:</span>
                      <span>عطر فاخر</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-alsaada-dark/70">المكونات الرئيسية:</span>
                      <span>عود، مسك، زعفران</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-alsaada-dark/70">مدة البقاء:</span>
                      <span>8-12 ساعة</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-alsaada-dark/70">بلد المنشأ:</span>
                      <span>سلطنة عمان</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="bg-white p-6 rounded-lg shadow-md arabic-text">
              <h3 className="text-xl font-semibold mb-4">تقييمات العملاء</h3>
              <div className="flex items-center mb-6">
                <div className="flex items-center text-yellow-400 text-3xl ml-4">
                  <span>4.8</span>
                  <span className="text-sm text-alsaada-dark/60 mr-1">/5</span>
                </div>
                <div>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-alsaada-dark/60">18 تقييم</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-alsaada-cream/20 p-4 rounded-md">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-alsaada-gold/20 rounded-full flex items-center justify-center text-alsaada-gold font-bold ml-3">
                      أ
                    </div>
                    <div>
                      <p className="font-bold">أحمد</p>
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-alsaada-dark/60 mr-auto">منذ أسبوع</span>
                  </div>
                  <p>عطر رائع جداً، رائحته تدوم طويلاً ويحصل على إعجاب الجميع. العبوة أنيقة وفاخرة، أنصح به بشدة.</p>
                </div>
                
                <div className="bg-alsaada-cream/20 p-4 rounded-md">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-alsaada-gold/20 rounded-full flex items-center justify-center text-alsaada-gold font-bold ml-3">
                      م
                    </div>
                    <div>
                      <p className="font-bold">محمد</p>
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star, index) => (
                          <svg key={star} className="w-4 h-4" fill={index < 4 ? "currentColor" : "none"} stroke={index >= 4 ? "currentColor" : "none"} viewBox="0 0 20 20">
                            <path strokeWidth="1.5" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-alsaada-dark/60 mr-auto">منذ شهر</span>
                  </div>
                  <p>عطر جميل لكن رائحته لا تدوم طويلاً كما هو متوقع. التغليف ممتاز والسعر مناسب للجودة.</p>
                </div>
              </div>
              
              <button className="mt-6 w-full py-3 border border-alsaada-gold text-alsaada-gold hover:bg-alsaada-gold hover:text-white transition-colors rounded-md">
                عرض جميع التقييمات
              </button>
            </TabsContent>
            
            <TabsContent value="shipping" className="bg-white p-6 rounded-lg shadow-md arabic-text">
              <h3 className="text-xl font-semibold mb-4">معلومات الشحن والإرجاع</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">سياسة الشحن</h4>
                  <ul className="space-y-2 list-disc list-inside text-alsaada-dark/80">
                    <li>الشحن مجاني للطلبات التي تزيد قيمتها عن 50 ر.ع</li>
                    <li>يتم شحن الطلبات خلال 1-2 يوم عمل من تاريخ الطلب</li>
                    <li>مدة التوصيل 2-4 أيام عمل داخل عمان</li>
                    <li>مدة التوصيل 5-7 أيام عمل لدول الخليج</li>
                    <li>مدة التوصيل 7-14 يوم عمل للدول العربية الأخرى</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">سياسة الإرجاع</h4>
                  <ul className="space-y-2 list-disc list-inside text-alsaada-dark/80">
                    <li>يمكن إرجاع المنتج خلال 14 يوم من تاريخ الاستلام</li>
                    <li>يجب أن يكون المنتج في حالته الأصلية وغير مستخدم</li>
                    <li>لا يمكن إرجاع العطور المفتوحة لأسباب صحية</li>
                    <li>تكاليف الشحن للإرجاع على العميل</li>
                    <li>يتم رد المبلغ خلال 7-14 يوم عمل بعد استلام المنتج المرتجع والتأكد من حالته</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products Section */}
        <div>
          <h2 className="section-title text-center mb-8">منتجات ذات صلة</h2>
          {product && (
            <ProductSlider 
              products={getProductsByCategory(product.category)
                .filter(p => p.id !== product.id)
                .slice(0, 6)} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
