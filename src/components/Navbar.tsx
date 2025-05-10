import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import CartButton from "./CartButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as any).contains(event.target)
      ) {
        setProductsDropdown(false);
      }
    }
    if (productsDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [productsDropdown]);

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
      <div className="container-custom flex items-center justify-between relative">
        {/* Cart Button - Moved to left */}
        <div className="flex items-center z-10">
          <CartButton />
        </div>

        {/* Desktop Navigation - Absolutely centered */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-max">
          <div className="flex items-center space-x-8 space-x-reverse flex-row-reverse">
            <Link
              to="/contact"
              className="font-somar font-medium text-alsaada-dark hover:text-alsaada-gold transition-colors"
            >
              اتصل بنا
            </Link>
            <Link
              to="/about"
              className="font-somar font-medium text-alsaada-dark hover:text-alsaada-gold transition-colors"
            >
              من نحن
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                className={`flex items-center font-somar font-medium transition-colors ${productsDropdown ? "text-alsaada-gold" : "text-alsaada-dark hover:text-alsaada-gold"}`}
                onClick={() => setProductsDropdown((v) => !v)}
              >
                المنتجات <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {productsDropdown && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-[#faf6ea] rounded-md shadow-lg py-4 px-8 z-10 w-[700px] flex flex-row justify-between items-stretch text-center gap-0"
                >
                  <div className="flex-1 flex flex-col justify-center items-center cursor-pointer">
                    <Link
                      to="/products?category=men"
                      className="text-base font-somar text-alsaada-dark hover:text-alsaada-gold transition-colors px-2 py-1 whitespace-nowrap"
                    >
                      عطور<br/>رجالية
                    </Link>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center cursor-pointer">
                    <Link
                      to="/products?category=women"
                      className="text-base font-somar text-alsaada-gold font-bold hover:text-alsaada-gold transition-colors px-2 py-1 whitespace-nowrap"
                    >
                      عطور<br/>نسائية
                    </Link>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center cursor-pointer">
                    <Link
                      to="/products?category=seasonal"
                      className="text-base font-somar text-alsaada-dark hover:text-alsaada-gold transition-colors px-2 py-1 whitespace-nowrap"
                    >
                      عطور<br/>موسمية
                    </Link>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center cursor-pointer">
                    <Link
                      to="/products?category=luxury"
                      className="text-base font-somar text-alsaada-dark hover:text-alsaada-gold transition-colors px-2 py-1 whitespace-nowrap"
                    >
                      عطور<br/>فاخرة
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/"
              className="font-somar font-medium text-alsaada-dark hover:text-alsaada-gold transition-colors"
            >
              الرئيسية
            </Link>
          </div>
        </div>

        {/* Logo - Moved to right */}
        <Link to="/" className="flex-shrink-0 z-10">
          <h1 className="text-2xl font-somar font-bold text-alsaada-dark">ALSAADA</h1>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-alsaada-dark hover:text-alsaada-gold transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link
              to="/contact"
              className="font-somar font-medium text-alsaada-dark hover:text-alsaada-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              اتصل بنا
            </Link>
            
            <Link
              to="/about"
              className="font-somar font-medium text-alsaada-dark hover:text-alsaada-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              من نحن
            </Link>
            
            <div className="space-y-2">
              <p className="font-somar font-medium text-alsaada-dark">المنتجات</p>
              <div className="pl-4 space-y-2">
                <Link
                  to="/products?category=men"
                  className="block text-sm font-somar text-alsaada-dark hover:text-alsaada-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  عطور رجالية
                </Link>
                <Link
                  to="/products?category=women"
                  className="block text-sm font-somar text-alsaada-dark hover:text-alsaada-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  عطور نسائية
                </Link>
                <Link
                  to="/products?category=seasonal"
                  className="block text-sm font-somar text-alsaada-dark hover:text-alsaada-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  عطور موسمية
                </Link>
                <Link
                  to="/products?category=luxury"
                  className="block text-sm font-somar text-alsaada-dark hover:text-alsaada-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  عطور فاخرة
                </Link>
              </div>
            </div>
            
            <Link
              to="/"
              className="font-somar font-medium text-alsaada-dark hover:text-alsaada-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
