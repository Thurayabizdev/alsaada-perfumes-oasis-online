
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import CartButton from "./CartButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-alsaada-dark">ALSAADA</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-alsaada-dark hover:text-alsaada-gold transition-colors">
            الرئيسية
          </Link>
          
          <div className="relative">
            <button
              className="flex items-center font-medium text-alsaada-dark hover:text-alsaada-gold transition-colors"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              المنتجات <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            
            {productsDropdown && (
              <div 
                className="absolute top-full right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10"
                onMouseEnter={() => setProductsDropdown(true)}
                onMouseLeave={() => setProductsDropdown(false)}
              >
                <Link 
                  to="/products?category=men" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-alsaada-cream"
                >
                  عطور رجالية
                </Link>
                <Link 
                  to="/products?category=women" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-alsaada-cream"
                >
                  عطور نسائية
                </Link>
                <Link 
                  to="/products?category=seasonal" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-alsaada-cream"
                >
                  عطور موسمية
                </Link>
                <Link 
                  to="/products?category=luxury" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-alsaada-cream"
                >
                  عطور فاخرة
                </Link>
              </div>
            )}
          </div>
          
          <Link
            to="/about"
            className="font-medium text-alsaada-dark hover:text-alsaada-gold transition-colors"
          >
            من نحن
          </Link>
          
          <Link
            to="/contact"
            className="font-medium text-alsaada-dark hover:text-alsaada-gold transition-colors"
          >
            اتصل بنا
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <CartButton />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-alsaada-dark hover:text-alsaada-gold transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="font-medium text-alsaada-dark hover:text-alsaada-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </Link>
            
            <div className="space-y-2">
              <p className="font-medium text-alsaada-dark">المنتجات</p>
              <div className="pl-4 space-y-2">
                <Link
                  to="/products?category=men"
                  className="block text-sm text-alsaada-dark hover:text-alsaada-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  عطور رجالية
                </Link>
                <Link
                  to="/products?category=women"
                  className="block text-sm text-alsaada-dark hover:text-alsaada-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  عطور نسائية
                </Link>
                <Link
                  to="/products?category=seasonal"
                  className="block text-sm text-alsaada-dark hover:text-alsaada-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  عطور موسمية
                </Link>
                <Link
                  to="/products?category=luxury"
                  className="block text-sm text-alsaada-dark hover:text-alsaada-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  عطور فاخرة
                </Link>
              </div>
            </div>
            
            <Link
              to="/about"
              className="font-medium text-alsaada-dark hover:text-alsaada-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              من نحن
            </Link>
            
            <Link
              to="/contact"
              className="font-medium text-alsaada-dark hover:text-alsaada-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
