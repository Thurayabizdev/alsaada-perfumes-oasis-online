
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { getAllProducts, getProductsByCategory } from "@/data/products";

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("category");
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [sortBy, setSortBy] = useState<string>("default");
  const [products, setProducts] = useState(
    selectedCategory 
      ? getProductsByCategory(selectedCategory) 
      : getAllProducts()
  );
  
  useEffect(() => {
    if (selectedCategory) {
      setProducts(getProductsByCategory(selectedCategory));
    } else {
      setProducts(getAllProducts());
    }
  }, [selectedCategory]);
  
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
    "luxury": "عطور فاخرة"
  };
  
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <h1 className="section-title text-center mb-12">المنتجات</h1>
        
        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-4 py-2 rounded-full text-sm arabic-text ${
                selectedCategory === null
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
          </div>
          
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
        <div className="mb-8 arabic-text">
          <h2 className="text-2xl font-semibold">
            {selectedCategory ? categories[selectedCategory as keyof typeof categories] : categories.all}
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
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 arabic-text">لا توجد منتجات في هذه الفئة.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
