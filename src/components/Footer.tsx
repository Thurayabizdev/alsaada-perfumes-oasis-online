
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-alsaada-dark text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Information */}
          <div className="arabic-text">
            <h3 className="text-xl font-bold mb-4 text-alsaada-gold">السعادة</h3>
            <p className="text-gray-300 mb-4">
              عطور فاخرة مستوحاة من التراث العماني، مصنوعة بأجود المكونات لتعبر عن الأصالة والرقي.
            </p>
          </div>

          {/* Quick Links */}
          <div className="arabic-text">
            <h3 className="text-xl font-bold mb-4 text-alsaada-gold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-alsaada-gold transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-alsaada-gold transition-colors">
                  المنتجات
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-alsaada-gold transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-alsaada-gold transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="arabic-text">
            <h3 className="text-xl font-bold mb-4 text-alsaada-gold">التصنيفات</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=men" className="text-gray-300 hover:text-alsaada-gold transition-colors">
                  عطور رجالية
                </Link>
              </li>
              <li>
                <Link to="/products?category=women" className="text-gray-300 hover:text-alsaada-gold transition-colors">
                  عطور نسائية
                </Link>
              </li>
              <li>
                <Link to="/products?category=seasonal" className="text-gray-300 hover:text-alsaada-gold transition-colors">
                  عطور موسمية
                </Link>
              </li>
              <li>
                <Link to="/products?category=luxury" className="text-gray-300 hover:text-alsaada-gold transition-colors">
                  عطور فاخرة
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="arabic-text">
            <h3 className="text-xl font-bold mb-4 text-alsaada-gold">معلومات الإتصال</h3>
            <p className="text-gray-300 mb-2">العنوان: مسقط، عمان</p>
            <p className="text-gray-300 mb-2">الهاتف: 968+ 1234 5678</p>
            <p className="text-gray-300 mb-2">البريد الإلكتروني: info@alsaada.com</p>
            <p className="text-gray-300">ساعات العمل: السبت - الخميس 9 صباحاً - 6 مساءً</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 arabic-text">
            جميع الحقوق محفوظة &copy; {currentYear} - السعادة للعطور
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
