
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سنقوم بالرد عليك في أقرب وقت ممكن",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <h1 className="section-title text-center mb-12">اتصل بنا</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md arabic-text">
            <h2 className="text-2xl font-bold text-alsaada-dark mb-6">أرسل لنا رسالة</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-alsaada-dark mb-1">
                    الاسم الكامل
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-alsaada-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-alsaada-dark mb-1">
                    البريد الإلكتروني
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-alsaada-gold"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-alsaada-dark mb-1">
                    رقم الهاتف
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-alsaada-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-alsaada-dark mb-1">
                    الموضوع
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-alsaada-gold"
                  >
                    <option value="">اختر موضوعاً...</option>
                    <option value="general">استفسار عام</option>
                    <option value="products">استفسار عن المنتجات</option>
                    <option value="wholesale">استفسار عن البيع بالجملة</option>
                    <option value="other">آخر</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-alsaada-dark mb-1">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-alsaada-gold"
                ></textarea>
              </div>
              
              <div>
                <button type="submit" className="btn-gold w-full">
                  إرسال الرسالة
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md arabic-text">
            <h2 className="text-2xl font-bold text-alsaada-dark mb-6">معلومات الاتصال</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-alsaada-dark mb-2">العنوان</h3>
                <p className="text-gray-700">
                  طريق السلطان قابوس، بالقرب من سيتي سنتر، مسقط، سلطنة عمان
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-alsaada-dark mb-2">ساعات العمل</h3>
                <p className="text-gray-700">السبت - الخميس: 9:00 صباحاً - 6:00 مساءً</p>
                <p className="text-gray-700">الجمعة: مغلق</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-alsaada-dark mb-2">اتصل بنا</h3>
                <p className="text-gray-700">الهاتف: 968+ 1234 5678</p>
                <p className="text-gray-700">البريد الإلكتروني: info@alsaada.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-alsaada-dark mb-2">تابعنا</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-alsaada-gold text-white rounded-full flex items-center justify-center">
                    <span>F</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-alsaada-gold text-white rounded-full flex items-center justify-center">
                    <span>I</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-alsaada-gold text-white rounded-full flex items-center justify-center">
                    <span>X</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-alsaada-dark mb-4">الموقع</h3>
              <div className="h-64 bg-alsaada-cream rounded-lg flex items-center justify-center">
                <p className="text-gray-500">خريطة الموقع</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
