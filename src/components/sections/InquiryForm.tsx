import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

interface InquiryFormProps {
  compact?: boolean;
  productName?: string;
  initialType?: string;
}

export default function InquiryForm({ compact, productName, initialType }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState(initialType === 'sample' ? `I would like to request a sample kit for ${productName || 'your materials'}.` : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-xl shadow-lg text-center border border-green-100"
      >
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Received!</h3>
        <p className="text-slate-600">
          Thank you for reaching out. Our B2B sales team will contact you within 24 hours with a customized quote.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-blue-600 font-semibold hover:underline"
        >
          Send another inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-4" : "bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 space-y-8 relative overflow-hidden"}>
      {!compact && (
        <>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>
          <div className="mb-8">
            <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Request a Bulk Quote</h3>
            <p className="text-slate-500 font-medium">Get specialized B2B pricing for your manufacturing needs.</p>
          </div>
        </>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="John Doe"
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-medium placeholder:text-slate-400"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Company Name</label>
          <input 
            required
            type="text" 
            placeholder="Global Garments Ltd."
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-medium placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Work Email</label>
          <input 
            required
            type="email" 
            placeholder="john@company.com"
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-medium placeholder:text-slate-400"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Country</label>
          <input 
            required
            type="text" 
            placeholder="e.g. Vietnam, Turkey"
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-medium placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Product of Interest</label>
          <select 
            defaultValue={productName || ""}
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-medium appearance-none cursor-pointer"
          >
            <option value="" disabled>Select a product</option>
            <option value="Polyester Yarn">Polyester Yarn</option>
            <option value="Nylon Monofilament">Nylon Monofilament</option>
            <option value="Zipper Tape">Zipper Tape</option>
            <option value="Metal Components">Metal Components</option>
            <option value="Custom Solution">Custom Solution</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Monthly Volume</label>
          <input 
            type="text" 
            placeholder="e.g. 50,000 meters"
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-medium placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Additional Requirements</label>
        <textarea 
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your specific technical requirements..."
          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-medium placeholder:text-slate-400 resize-none"
        ></textarea>
      </div>

      <button 
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-600/30 hover:scale-[1.01] active:scale-[0.99]"
      >
        <Send className="w-5 h-5" />
        Submit RFQ
      </button>
      
      <p className="text-center text-xs text-slate-400 font-medium">
        By submitting, you agree to our privacy policy. <br />We typically respond within 1 business day.
      </p>
    </form>
  );
}
