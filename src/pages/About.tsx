
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom arabic-text">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center mb-12">عن السعادة</h1>
          
          <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-96">
              <div className="absolute inset-0 bg-alsaada-dark/20"></div>
              <img 
                src="/lovable-uploads/d30c1b65-c8b3-4d49-bcd6-751c5d9b5c84.png" 
                alt="Alsaada Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold text-alsaada-dark mb-4">قصتنا</h2>
              <p className="mb-4 leading-relaxed">
                تأسست شركة السعادة للعطور في عام 2015 في سلطنة عمان، على يد خبراء عمانيين في صناعة العطور 
                بهدف إحياء التراث العماني العريق في صناعة العطور والبخور ونقله إلى العالم بأسلوب عصري وفاخر.
              </p>
              <p className="mb-4 leading-relaxed">
                نستمد الإلهام من الطبيعة العمانية الخلابة، من جبال الحجر وصحراء الربع الخالي ووديان شمال عمان الخضراء. 
                نعتمد على المكونات الطبيعية ذات الجودة العالية، ونستخدم أحدث التقنيات في صناعة العطور للحصول على 
                منتجات فاخرة تمتاز بالأصالة والابتكار.
              </p>
              <p className="leading-relaxed">
                اليوم، أصبحت السعادة واحدة من أهم العلامات التجارية في مجال العطور الفاخرة في المنطقة، وتسعى باستمرار لتوسيع 
                نطاق منتجاتها وتقديم تجارب عطرية فريدة لعملائها حول العالم.
              </p>
            </div>
          </div>
          
          <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-alsaada-dark mb-4">رؤيتنا</h2>
              <p className="leading-relaxed">
                نسعى لأن نكون العلامة التجارية الرائدة في مجال العطور الفاخرة التي تمزج بين التراث العربي الأصيل 
                والابتكار العصري، وأن ننشر الثقافة العطرية العمانية حول العالم.
              </p>
            </div>
          </div>
          
          <div className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-alsaada-dark mb-4">قيمنا</h2>
              <ul className="list-disc list-inside space-y-3 leading-relaxed">
                <li>
                  <span className="font-semibold">الجودة والتميز:</span> نلتزم بتقديم أعلى معايير الجودة في جميع منتجاتنا.
                </li>
                <li>
                  <span className="font-semibold">الأصالة:</span> نحافظ على أصالة التراث العماني في صناعة العطور مع إضافة لمسات عصرية مبتكرة.
                </li>
                <li>
                  <span className="font-semibold">الاستدامة:</span> نعمل على تبني ممارسات مستدامة في جميع مراحل الإنتاج.
                </li>
                <li>
                  <span className="font-semibold">خدمة العملاء:</span> نضع رضا عملائنا في قمة أولوياتنا.
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-alsaada-dark mb-6">فريقنا</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((member) => (
                  <div key={member} className="text-center">
                    <div className="w-32 h-32 rounded-full bg-alsaada-cream mx-auto mb-4"></div>
                    <h3 className="font-bold text-alsaada-dark mb-1">أحمد الهاشمي</h3>
                    <p className="text-gray-600">المؤسس والرئيس التنفيذي</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
