import { motion } from 'motion/react';
import { INDUSTRIES } from '@/src/data/siteData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/src/components/SEO';

export default function Industries() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <SEO 
        title="Industries We Serve" 
        description="Specialized zipper materials for apparel, luggage, footwear, and outdoor gear. Engineered to meet specific industry performance standards."
        keywords="zipper materials for apparel, luggage zipper components, outdoor gear zippers, industrial zipper applications"
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            Materials Engineered for <br /><span className="text-blue-600">Specific Industry</span> Standards
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Different applications demand different performance characteristics. We provide specialized material sets that meet the rigorous testing standards of your specific industry.
          </p>
        </div>

        <div className="space-y-32">
          {INDUSTRIES.map((industry, idx) => (
            <motion.div 
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src={industry.image} alt={industry.name} className="w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-black text-slate-900 mb-6">{industry.name}</h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="mb-10">
                  <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Recommended Materials</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {industry.materials.map((material, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                        <span className="font-bold text-slate-800">{material}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
                >
                  Request Industry Sample Kit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industrial Applications Section */}
        <section className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8">Industrial & Heavy-Duty Applications</h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                Beyond consumer goods, we provide materials for high-stress industrial environments. Our heavy-duty tapes and reinforced yarns are used in protective gear, automotive upholstery, and aerospace applications.
              </p>
              <ul className="space-y-4">
                {['High-Temperature Resistance', 'Chemical & Oil Repellency', 'Extreme Tensile Strength', 'Flame Retardant Options'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" alt="Industrial" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden translate-y-8">
                <img src="https://images.unsplash.com/photo-1530124560676-587cad321375?auto=format&fit=crop&q=80&w=400" alt="Industrial" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
