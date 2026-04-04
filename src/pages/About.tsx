import { motion } from 'motion/react';
import { Factory, ShieldCheck, Globe, Users, Award, Zap, CheckCircle2 } from 'lucide-react';
import SEO from '@/src/components/SEO';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <SEO 
        title="About Our Manufacturing Excellence" 
        description="Learn about Ultra Zip Solutions' 25-year history, our ISO certified production facilities, and our mission to empower global zipper manufacturers."
        keywords="zipper manufacturing company, industrial textile history, ISO certified manufacturer, global supply chain"
      />
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Decades of <span className="text-blue-600">Manufacturing</span> Excellence
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Founded in 1998, Ultra Zip Solutions has grown from a local yarn supplier to a global leader in zipper raw materials. We bridge the gap between raw material science and high-volume manufacturing.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-black text-blue-600 mb-1">25+</div>
                <div className="text-slate-500 font-bold uppercase text-xs tracking-widest">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-600 mb-1">500+</div>
                <div className="text-slate-500 font-bold uppercase text-xs tracking-widest">Global Clients</div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000" 
              alt="Factory Floor" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-slate-900">ISO 9001:2015</div>
                <div className="text-xs text-slate-500">Quality Management System</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-slate-900 p-12 rounded-[2.5rem] text-white">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To empower the global textile and industrial manufacturing sectors with materials that define the standards of durability, reliability, and innovation.
            </p>
          </div>
          <div className="bg-blue-600 p-12 rounded-[2.5rem] text-white">
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              To be the world's most trusted partner in the zipper supply chain, fostering sustainable growth through precision engineering and global collaboration.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">Production Capabilities</h2>
            <h3 className="text-4xl font-black text-slate-900">Scale Without Compromise</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Factory, title: "Advanced Weaving", desc: "State-of-the-art looms producing over 5 million meters of tape monthly." },
              { icon: Zap, title: "Precision Extrusion", desc: "High-speed monofilament lines with laser-guided diameter control." },
              { icon: ShieldCheck, title: "Automated Finishing", desc: "Robotic plating and coating lines for consistent metal finishes." }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                <item.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Reach */}
        <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <Globe className="w-full h-full -translate-x-1/4 translate-y-1/4" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8">A Global Supply Network</h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                With distribution hubs in Asia, Europe, and the Americas, we ensure that your production lines never stop. Our logistics team handles all export documentation and compliance.
              </p>
              <div className="space-y-4">
                {['Direct Export to 50+ Countries', 'Strategic Warehousing Hubs', 'Multilingual Technical Support', 'FOB/CIF/DDP Shipping Options'].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
                <div className="text-3xl font-black mb-2">12</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Global Offices</div>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
                <div className="text-3xl font-black mb-2">24/7</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Support</div>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
                <div className="text-3xl font-black mb-2">99.8%</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">On-time Delivery</div>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
                <div className="text-3xl font-black mb-2">100%</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Compliance</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
