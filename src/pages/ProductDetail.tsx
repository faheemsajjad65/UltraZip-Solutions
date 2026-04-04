import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '@/src/data/siteData';
import { CheckCircle2, ArrowLeft, FileText, Globe, ShieldCheck, Zap, Download } from 'lucide-react';
import InquiryForm from '@/src/components/sections/InquiryForm';
import SEO from '@/src/components/SEO';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return <Navigate to="/products" />;

  return (
    <div className="pt-32 pb-24 bg-white">
      <SEO 
        title={`${product.name} Specifications`} 
        description={product.shortDescription}
        keywords={`${product.name}, ${product.category}, zipper material specs, industrial ${product.category}`}
      />
      <div className="container mx-auto px-4">
        <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-12 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 mb-8">
              <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="rounded-2xl overflow-hidden border border-slate-100 aspect-video bg-slate-50">
                   <img src={`${product.image}&sig=${i}`} alt="Detail" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6">{product.category}</div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">{product.name}</h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">{product.fullDescription}</p>

            <div className="bg-slate-50 rounded-3xl p-8 mb-10 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" /> Technical Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-slate-200/50">
                    <span className="text-slate-500 text-sm">{key}</span>
                    <span className="font-bold text-slate-900 text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Key Benefits</h4>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Available Variants</h4>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700">{variant}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#rfq" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-700/20">
                Request Bulk Quote
              </a>
              <Link 
                to={`/contact?product=${encodeURIComponent(product.name)}&type=sample`} 
                className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                Request Sample
              </Link>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download TDS
              </button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Primary Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.useCases.map((useCase, i) => (
                <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0"><Zap className="w-6 h-6 text-blue-600" /></div>
                  <span className="font-bold text-slate-800">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white">
            <h3 className="text-2xl font-bold mb-6">Supply Info</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Globe className="w-6 h-6 text-blue-400" />
                <div><div className="text-sm text-slate-400">Global Shipping</div><div className="font-bold">FOB, CIF, DDP Available</div></div>
              </div>
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
                <div><div className="text-sm text-slate-400">Minimum Order</div><div className="font-bold">500kg / 10,000m</div></div>
              </div>
              <div className="flex items-center gap-4">
                <Zap className="w-6 h-6 text-blue-400" />
                <div><div className="text-sm text-slate-400">Lead Time</div><div className="font-bold">14-21 Business Days</div></div>
              </div>
            </div>
          </div>
        </div>

        <section id="rfq" className="scroll-mt-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Request a Customized Quote</h2>
              <p className="text-slate-600 text-lg">Provide your specifications and volume requirements for {product.name}.</p>
            </div>
            <InquiryForm productName={product.name} />
          </div>
        </section>
      </div>
    </div>
  );
}
