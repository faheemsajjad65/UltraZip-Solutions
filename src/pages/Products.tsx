import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/src/data/siteData';
import { ArrowRight, Search, Download } from 'lucide-react';
import SEO from '@/src/components/SEO';
import { useState, useMemo } from 'react';

const CATEGORIES = ['All Materials', 'Sliders', 'Tape', 'Components', 'Coil'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All Materials');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'All Materials' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.fullDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-32 pb-24 bg-white">
      <SEO 
        title="Zipper Materials Catalog" 
        description="Browse our full range of precision zipper materials including sliders, tapes, pin boxes, and nylon coils. Technical specs and bulk pricing available."
        keywords="zipper materials catalog, zipper sliders, zipper tape supplier, pin box components, nylon coil raw material"
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Precision Zipper <br /><span className="text-blue-600">Materials Catalog</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Explore our comprehensive range of raw materials engineered specifically for high-performance zipper manufacturing. From precision sliders to durable tapes.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search materials..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all overflow-hidden flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-blue-700 uppercase shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed">
                  {product.fullDescription}
                </p>
                
                <div className="space-y-3 mb-8">
                  {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm border-b border-slate-50 pb-2">
                      <span className="text-slate-500">{key}</span>
                      <span className="font-bold text-slate-900">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex gap-3">
                  <Link 
                    to={`/products/${product.id}`}
                    className="flex-grow bg-slate-900 hover:bg-slate-800 text-white text-center py-3 rounded-xl font-bold transition-all"
                  >
                    View Details
                  </Link>
                  <button className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-all" title="Download TDS">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="mt-24 bg-blue-700 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8">Need a Custom Material Specification?</h2>
            <p className="text-xl text-blue-100 mb-12">
              Our R&D team works directly with manufacturers to develop proprietary yarns, tapes, and finishes tailored to unique performance requirements.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl shadow-black/10"
            >
              Consult Our Engineers
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
