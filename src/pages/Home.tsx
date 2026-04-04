import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS, INDUSTRIES } from '@/src/data/siteData';
import { ArrowRight, CheckCircle2, Factory, Award, Truck, Users, Settings } from 'lucide-react';
import InquiryForm from '@/src/components/sections/InquiryForm';
import SEO from '@/src/components/SEO';
import ZipperDivider from '@/src/components/animations/ZipperDivider';

export default function Home() {
  return (
    <div className="bg-white">
      <SEO 
        title="Precision Zipper Raw Materials" 
        description="Global B2B supplier of precision zipper materials including pin boxes, sliders, tape, and nylon coils. ISO 9001 certified manufacturing."
        keywords="zipper materials, pin box, zipper sliders, zipper tape, nylon coil, B2B manufacturing, garment industry supply"
      />
      {/* Hero is handled in App.tsx layout or directly here */}
      
      {/* Trust Badges Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-center text-slate-400 font-bold text-xs uppercase tracking-[0.3em] mb-12">Supplying the World's Leading Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png" alt="H&M" className="h-8 md:h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" alt="Nike" className="h-6 md:h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png" alt="Adidas" className="h-10 md:h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Zara_Logo.svg/1200px-Zara_Logo.svg.png" alt="Zara" className="h-6 md:h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Uniqlo_logo.svg/1200px-Uniqlo_logo.svg.png" alt="Uniqlo" className="h-10 md:h-12" />
          </div>
        </div>
      </section>

      <ZipperDivider />

      {/* Product Categories Preview */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6 uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4" />
                Premium Raw Materials
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
                Engineered for <span className="text-blue-600">Excellence</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                We provide the precision-engineered materials that global manufacturers trust for their most demanding zipper applications.
              </p>
            </div>
            <Link to="/products" className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10">
              Explore Catalog
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="text-blue-600 text-xs font-bold uppercase mb-2">{product.category}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{product.name}</h4>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <Link 
                    to={`/products/${product.id}`}
                    className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm hover:text-blue-600 transition-colors"
                  >
                    Technical Specs
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ZipperDivider />

      {/* Why Choose Us */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest">
                The Ultra Zip Advantage
              </div>
              <h3 className="text-5xl md:text-6xl font-black mb-10 leading-[1.1]">
                Engineered for <br />
                <span className="text-blue-500">Uncompromising</span> Reliability.
              </h3>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                We don't just supply materials; we provide the precision-engineered foundation for your brand's reputation. Our manufacturing processes are optimized for global scale and precision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Factory className="w-7 h-7 text-blue-400 group-hover:text-white" />
                  </div>
                  <h5 className="font-bold text-xl mb-3">Massive Capacity</h5>
                  <p className="text-slate-500 leading-relaxed">Handling multi-ton monthly orders with zero lead-time variance.</p>
                </div>
                <div className="group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Award className="w-7 h-7 text-blue-400 group-hover:text-white" />
                  </div>
                  <h5 className="font-bold text-xl mb-3">Strict QC</h5>
                  <p className="text-slate-500 leading-relaxed">12-point durability and color-fastness testing on every batch.</p>
                </div>
                <div className="group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Truck className="w-7 h-7 text-blue-400 group-hover:text-white" />
                  </div>
                  <h5 className="font-bold text-xl mb-3">Global Logistics</h5>
                  <p className="text-slate-500 leading-relaxed">Direct shipping to major garment hubs in 50+ countries.</p>
                </div>
                <div className="group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Users className="w-7 h-7 text-blue-400 group-hover:text-white" />
                  </div>
                  <h5 className="font-bold text-xl mb-3">Expert Support</h5>
                  <p className="text-slate-500 leading-relaxed">Technical engineers available for production line optimization.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=1000" 
                  alt="Quality Control" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-blue-600 p-10 rounded-[2rem] shadow-2xl hidden md:block border-4 border-slate-900">
                <div className="text-5xl font-black mb-1">25+</div>
                <div className="text-blue-100 font-bold uppercase tracking-[0.2em] text-xs">Years of Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] bg-slate-50 rounded-[3rem] p-8 flex items-center justify-center overflow-hidden border border-slate-100">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] opacity-20 scale-150"></div>
                <div className="relative z-10 grid grid-cols-2 gap-8 w-full">
                  <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                    <div className="text-4xl font-black text-blue-600 mb-2">500+</div>
                    <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Active Clients</div>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                    <div className="text-4xl font-black text-blue-600 mb-2">12M+</div>
                    <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Meters Monthly</div>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                    <div className="text-4xl font-black text-blue-600 mb-2">15</div>
                    <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Global Warehouses</div>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                    <div className="text-4xl font-black text-blue-600 mb-2">24/7</div>
                    <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Technical Support</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6 uppercase tracking-widest">
                Global Footprint
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
                Powering the World's <br /><span className="text-blue-600">Garment Hubs</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                From Vietnam to Turkey, our materials are the silent partners in millions of high-quality products. We maintain strategic inventory in key manufacturing zones to ensure your production never stops.
              </p>
              <div className="space-y-4">
                {['Strategic hubs in SE Asia & Europe', 'Just-in-time delivery capabilities', 'Localized technical engineering teams'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">Industries We Serve</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6">Tailored Solutions for Diverse Manufacturing Needs</h3>
            <p className="text-slate-600 text-lg">We understand that different products require different material properties. Our catalog is curated for specific industry standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <div key={industry.id} className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h4 className="text-2xl font-bold text-white mb-3">{industry.name}</h4>
                  <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {industry.description}
                  </p>
                  <Link to="/industries" className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurator CTA */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6 uppercase tracking-widest">
                  Interactive Tool
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                  Design Your <br /><span className="text-blue-500">Perfect</span> Zipper
                </h2>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  Use our proprietary Zipper Configurator to visualize custom tape colors and teeth finishes in real-time. Export your specs directly to our sales team.
                </p>
                <Link 
                  to="/configurator" 
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
                >
                  Open Configurator
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-square bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 font-bold">
                    <img 
                      src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=600" 
                      alt="Zipper Close-up" 
                      className="w-full h-full object-cover rounded-2xl opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-blue-600 p-6 rounded-full shadow-2xl">
                        <Settings className="w-12 h-12 text-white animate-spin-slow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(i => <CheckCircle2 key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
                </div>
                <blockquote className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
                  "Ultra Zip Solutions has been our primary material partner for over 8 years. Their consistency in yarn tenacity and color matching is unmatched in the industry."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-blue-500 border-2 border-white/20 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=1" alt="Client" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">Marco Rossi</div>
                    <div className="text-blue-200">Production Director, EuroBags Italy</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">Ready to Upgrade Your Supply Chain?</h4>
                <InquiryForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8">Let's Build Better <br /><span className="text-blue-600">Zippers Together.</span></h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Join 500+ manufacturers worldwide who rely on Ultra Zip Solutions for precision, quality, and reliability.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact" 
              className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-blue-700/20"
            >
              Request a Sample Kit
            </Link>
            <Link 
              to="/products" 
              className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl transition-all"
            >
              Browse Materials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
