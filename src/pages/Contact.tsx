import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import InquiryForm from '@/src/components/sections/InquiryForm';
import SEO from '@/src/components/SEO';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const productName = searchParams.get('product');
  const type = searchParams.get('type');

  return (
    <div className="pt-32 pb-24 bg-white">
      <SEO 
        title="Request a Bulk Quote" 
        description="Contact our B2B sales team for specialized pricing, technical support, and material sample kits. 24-hour response guarantee."
        keywords="zipper RFQ, bulk zipper materials quote, contact zipper manufacturer, request material samples"
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            Start Your <span className="text-blue-600">{type === 'sample' ? 'Sample Request' : 'Bulk Inquiry'}</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Our specialized B2B team is ready to assist with technical specifications, volume pricing, and sample requests. We typically respond to all RFQs within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Direct Contact</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Sales Hotline</div>
                    <div className="text-lg font-bold text-slate-900">+86 (21) 5555-0123</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Email Inquiries</div>
                    <div className="text-lg font-bold text-slate-900">sales@ultrazipsolutions.com</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">WhatsApp Business</div>
                    <div className="text-lg font-bold text-slate-900">+86 138 0000 0000</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Promise</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>24-Hour Response Guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>Global Shipping & Logistics Support</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Free Material Sample Kits</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white">
              <h4 className="font-bold mb-4">Global Headquarters</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                123 Industrial Zone, Tech Park,<br />
                Pudong District, Shanghai,<br />
                China 200000
              </p>
              <div className="h-48 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 font-bold border border-white/5">
                [ Interactive Map Placeholder ]
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 md:p-12">
              <InquiryForm productName={productName || undefined} initialType={type || undefined} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
