
import React from "react";
import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

const categories: Category[] = [
  {
    id: "men",
    name: "عطور رجالية",
    description: "عطور قوية وجذابة للرجل العصري",
    image: "/lovable-uploads/00cc0f3a-06e1-4c56-a950-20e251841e89.png",
  },
  {
    id: "women",
    name: "عطور نسائية",
    description: "تشكيلة راقية من العطور النسائية الفاخرة",
    image: "/lovable-uploads/a3c85a27-c6c1-4a2f-8d8a-9d60aa0c256c.png",
  },
  {
    id: "seasonal",
    name: "عطور موسمية",
    description: "عطور مميزة لكل موسم ومناسبة",
    image: "/lovable-uploads/a734593c-4113-4df7-a308-4a505b879acb.png",
  },
  {
    id: "luxury",
    name: "عطور فاخرة",
    description: "اكتشف تشكيلتنا من أرقى العطور الفاخرة",
    image: "/lovable-uploads/9d652ae6-1315-410c-b077-2a197db09bc7.png",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-alsaada-cream">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">تشكيلاتنا</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group"
            >
              <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 mb-4 overflow-hidden rounded-md bg-alsaada-stone/30">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="arabic-text">
                  <h3 className="text-xl font-semibold text-alsaada-dark mb-2">
                    {category.name}
                  </h3>
                  <p className="text-alsaada-dark/70 mb-4">
                    {category.description}
                  </p>
                  <span className="inline-block text-alsaada-gold font-medium">
                    تسوق الآن →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
