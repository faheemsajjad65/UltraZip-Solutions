import { motion } from 'motion/react';
import { ShieldCheck, Award, Zap, CheckCircle2, FileText, Microscope, Activity } from 'lucide-react';
import SEO from '@/src/components/SEO';

export default function Quality() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <SEO 
        title="Quality Control & Certifications" 
        description="Our 12-point testing protocol ensures every batch of zipper materials meets global standards. ISO 9001 and OEKO-TEX certified."
        keywords="zipper quality control, textile testing standards, ISO 9001 zipper manufacturer, OEKO-TEX zipper materials"
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            Uncompromising <span className="text-blue-600">Quality</span> Standards
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            In B2B manufacturing, consistency is everything. Our multi-stage quality control process ensures that every kilometer of yarn and every batch of components meets your exact specifications.
          </p>
        </div>

        {/* Testing Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our 12-Point Testing Protocol</h2>
            <div className="space-y-6">
              {[
                { title: "Tensile Strength Analysis", desc: "Verifying yarn and tape breaking points using calibrated precision instruments." },
                { title: "Color Spectrophotometry", desc: "Ensuring Delta E < 1.0 consistency across different production batches." },
                { title: "Heat Shrinkage Testing", desc: "Measuring dimensional stability at temperatures up to 200°C." },
                { title: "Abrasion & Friction Resistance", desc: "Simulating 10,000+ cycles of slider movement to ensure longevity." },
                { title: "Chemical Resistance", desc: "Testing against common detergents, oils, and industrial solvents." }
              ].map((test, i) => (
                <div key={i} className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{test.title}</h4>
                    <p className="text-slate-500 text-sm">{test.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000" 
                alt="Lab Testing" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
              <Microscope className="w-12 h-12 text-blue-600 mb-4" />
              <div className="text-2xl font-black text-slate-900">100%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Batch Testing</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white mb-32">
          <div className="text-center mb-16">
            <h2 className="text-blue-500 font-bold uppercase tracking-wider mb-4">Compliance & Certifications</h2>
            <h3 className="text-4xl font-black">Globally Recognized Standards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "ISO 9001:2015", desc: "Quality Management Systems certification for manufacturing and distribution." },
              { title: "OEKO-TEX Standard 100", desc: "Ensuring all textile materials are free from harmful substances." },
              { title: "REACH Compliant", desc: "Full compliance with EU regulations on chemical substances." }
            ].map((cert, i) => (
              <div key={i} className="p-10 bg-white/5 rounded-3xl border border-white/10 text-center">
                <Award className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                <h4 className="text-2xl font-bold mb-4">{cert.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Machinery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=400" alt="Machinery" className="rounded-3xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=400" alt="Machinery" className="rounded-3xl shadow-lg translate-y-12" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">Our Technology</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-8 leading-tight">Advanced Machinery for Precision Output</h3>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              We invest heavily in the latest European and Asian manufacturing technology. Our production lines feature automated monitoring systems that detect deviations in real-time.
            </p>
            <div className="space-y-4">
              {[
                "Laser-guided diameter control for monofilament",
                "Automated tension control on weaving looms",
                "Digital color matching systems",
                "Robotic component sorting and packaging"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
