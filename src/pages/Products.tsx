
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { getAllProducts, getProductsByCategory, getProductsByCollection } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("category");
  const collectionParam = searchParams.get("collection");
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(collectionParam);
  const [sortBy, setSortBy] = useState<string>("default");
  const [products, setProducts] = useState(
    selectedCollection ? getProductsByCollection(selectedCollection) :
    selectedCategory ? getProductsByCategory(selectedCategory) : 
    getAllProducts()
  );
  
  useEffect(() => {
    if (selectedCollection) {
      setProducts(getProductsByCollection(selectedCollection));
      setSelectedCategory(null);
    } else if (selectedCategory) {
      setProducts(getProductsByCategory(selectedCategory));
      setSelectedCollection(null);
    } else {
      setProducts(getAllProducts());
    }
  }, [selectedCategory, selectedCollection]);
  
  useEffect(() => {
    const sortProducts = () => {
      let sortedProducts = [...products];
      
      if (sortBy === "price-asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === "price-desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (sortBy === "name-asc") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === "name-desc") {
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      }
      
      setProducts(sortedProducts);
    };
    
    sortProducts();
  }, [sortBy]);
  
  // Map of category IDs to Arabic names
  const categories = {
    "all": "جميع المنتجات",
    "men": "عطور رجالية",
    "women": "عطور نسائية",
    "seasonal": "عطور موسمية",
    "luxury": "عطور فاخرة",
    "bakhoor": "بخور",
    "green": "المجموعة الخضراء"
  };
  
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setSelectedCollection(null);
  };
  
  const handleCollectionChange = (collection: string | null) => {
    setSelectedCollection(collection);
    setSelectedCategory(null);
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const getCategoryTitle = () => {
    if (selectedCollection === 'green') {
      return categories['green'];
    } else if (selectedCategory) {
      return categories[selectedCategory as keyof typeof categories];
    } else {
      return categories.all;
    }
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <h1 className="section-title text-center mb-8">المنتجات</h1>
        
        <Tabs defaultValue="categories" className="mb-8">
          <div className="flex justify-center mb-4">
            <TabsList className="bg-alsaada-cream/60">
              <TabsTrigger value="categories" className="arabic-text">فئات المنتجات</TabsTrigger>
              <TabsTrigger value="collections" className="arabic-text">تشكيلات خاصة</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="categories" className="animate-fade-in">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`px-4 py-2 rounded-full text-sm arabic-text ${
                  selectedCategory === null && selectedCollection === null
                    ? "bg-alsaada-gold text-white"
                    : "bg-alsaada-cream text-alsaada-dark hover:bg-alsaada-light/20"
                }`}
              >
                جميع المنتجات
              </button>
              
              <button
                onClick={() => handleCategoryChange("men")}
                className={`px-4 py-2 rounded-full text-sm arabic-text ${
                  selectedCategory === "men"
                    ? "bg-alsaada-gold text-white"
                    : "bg-alsaada-cream text-alsaada-dark hover:bg-alsaada-light/20"
                }`}
              >
                عطور رجالية
              </button>
              
              <button
                onClick={() => handleCategoryChange("women")}
                className={`px-4 py-2 rounded-full text-sm arabic-text ${
                  selectedCategory === "women"
                    ? "bg-alsaada-gold text-white"
                    : "bg-alsaada-cream text-alsaada-dark hover:bg-alsaada-light/20"
                }`}
              >
                عطور نسائية
              </button>
              
              <button
                onClick={() => handleCategoryChange("seasonal")}
                className={`px-4 py-2 rounded-full text-sm arabic-text ${
                  selectedCategory === "seasonal"
                    ? "bg-alsaada-gold text-white"
                    : "bg-alsaada-cream text-alsaada-dark hover:bg-alsaada-light/20"
                }`}
              >
                عطور موسمية
              </button>
              
              <button
                onClick={() => handleCategoryChange("luxury")}
                className={`px-4 py-2 rounded-full text-sm arabic-text ${
                  selectedCategory === "luxury"
                    ? "bg-alsaada-gold text-white"
                    : "bg-alsaada-cream text-alsaada-dark hover:bg-alsaada-light/20"
                }`}
              >
                عطور فاخرة
              </button>
              
              <button
                onClick={() => handleCategoryChange("bakhoor")}
                className={`px-4 py-2 rounded-full text-sm arabic-text ${
                  selectedCategory === "bakhoor"
                    ? "bg-alsaada-gold text-white"
                    : "bg-alsaada-cream text-alsaada-dark hover:bg-alsaada-light/20"
                }`}
              >
                بخور
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="collections" className="animate-fade-in">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <button
                onClick={() => handleCollectionChange("green")}
                className={`px-4 py-2 rounded-full text-sm arabic-text ${
                  selectedCollection === "green"
                    ? "bg-alsaada-gold text-white"
                    : "bg-alsaada-cream text-alsaada-dark hover:bg-alsaada-light/20"
                }`}
              >
                المجموعة الخضراء
              </button>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Sorting */}
        <div className="mb-8 flex justify-end items-center">
          <div className="arabic-text flex items-center">
            <label htmlFor="sort" className="ml-2">
              ترتيب حسب:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={handleSortChange}
              className="border border-alsaada-light/30 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-alsaada-gold"
            >
              <option value="default">الإفتراضي</option>
              <option value="price-asc">السعر: من الأقل إلى الأعلى</option>
              <option value="price-desc">السعر: من الأعلى إلى الأقل</option>
              <option value="name-asc">الاسم: أ-ي</option>
              <option value="name-desc">الاسم: ي-أ</option>
            </select>
          </div>
        </div>
        
        {/* Category title */}
        <div className="mb-8 arabic-text border-b pb-4 border-alsaada-gold/20">
          <h2 className="text-2xl font-semibold">
            {getCategoryTitle()}
          </h2>
          <p className="text-gray-600 mt-2">
            {products.length} منتج
          </p>
        </div>
        
        {/* Products grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-alsaada-cream/30 rounded-lg">
            <div className="w-16 h-16 bg-alsaada-cream rounded-full mx-auto flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-alsaada-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xl text-gray-600 arabic-text">لا توجد منتجات في هذه الفئة.</p>
            <button
              onClick={() => { setSelectedCategory(null); setSelectedCollection(null); }}
              className="mt-4 px-4 py-2 bg-alsaada-gold text-white rounded-md arabic-text"
            >
              عرض جميع المنتجات
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
