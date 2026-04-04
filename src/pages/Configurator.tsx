import { motion } from 'motion/react';
import ZipperConfigurator from '@/src/components/ZipperConfigurator';
import SEO from '@/src/components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function Configurator() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <SEO 
        title="Zipper Configurator Tool" 
        description="Design and visualize your custom zipper components. Select tape colors, teeth finishes, and slider types for your manufacturing needs."
        keywords="zipper configurator, custom zipper design, zipper visualization, B2B zipper tool"
      />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            PROPRIETARY VISUALIZATION TOOL
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            Visualize Your <span className="text-blue-600">Custom</span> Components
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Don't guess how your materials will look. Use our interactive configurator to select finishes and colors that match your brand's aesthetic.
          </p>
        </div>

        <ZipperConfigurator />

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Exact Color Matching</h4>
            <p className="text-slate-600">We use Pantone-calibrated dyeing processes to ensure the physical product matches your digital configuration.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
              <Zap className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Instant Spec Export</h4>
            <p className="text-slate-600">Download a technical data sheet of your configuration to share with your design and procurement teams.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
              <ArrowRight className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Seamless RFQ</h4>
            <p className="text-xl font-bold text-blue-600">Ready to order?</p>
            <p className="text-slate-600">Submit your configuration directly to our sales team for a prioritized bulk quote.</p>
          </div>
        </div>

        <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white">
          <h2 className="text-4xl font-black mb-8">Can't find the exact finish you need?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Our R&D lab can develop custom electroplating finishes and proprietary tape weaves for exclusive brand partnerships.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
          >
            Contact R&D Team
          </Link>
        </div>
      </div>
    </div>
  );
}
