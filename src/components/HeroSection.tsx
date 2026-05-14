import { motion } from 'motion/react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';

import type { ScrollToOrder } from './sectionTypes';

type HeroSectionProps = {
  onOrderClick: ScrollToOrder;
};

export default function HeroSection({ onOrderClick }: HeroSectionProps) {
  return (
    <section className="mt-20 relative z-10">
      <div className="relative w-full max-w-[1920px] mx-auto overflow-hidden">
        <img
          src="/images/hero-banner.webp"
          alt="Hoàng Đằng Rừng Banner"
          className="w-full h-auto object-cover min-h-[300px] md:min-h-0"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col space-y-6 text-center lg:text-left max-w-3xl"
            >
              <div className="inline-flex items-center self-center gap-2 px-4 py-2 rounded-full bg-[#1a4331] text-[#fefae0] text-xs font-bold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Từ Thiên Nhiên Đại Ngàn</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-outfit leading-tight tracking-tight text-white drop-shadow-lg">
                TINH HOA THẢO DƯỢC <br />
                <span className="text-[#fefae0]">QUÝ HIẾM</span>
              </h1>
              <p className="text-lg md:text-xl text-white font-medium drop-shadow-md">
                Giải pháp chăm sóc sức khỏe toàn diện từ núi rừng Tây Nguyên. <br className="hidden md:block" /> An toàn - Lành tính - Hiệu quả vượt trội.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start self-start gap-4 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-auto items-stretch max-w-sm sm:max-w-none mx-auto lg:mx-0">
                  <button
                    onClick={() => onOrderClick()}
                    className="bg-[#bc6c25] hover:bg-[#a05a1d] text-white px-6 py-3 rounded-tl-2xl rounded-br-2xl font-black uppercase tracking-wider text-sm sm:text-base transition-transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    Xem ưu đãi <ArrowRight className="w-5 h-5" />
                  </button>
                  <a
                    href={`tel:${import.meta.env.VITE_CONTACT_PHONE}`}
                    className="bg-white/90 hover:bg-white text-[#283618] px-6 py-3 rounded-tl-2xl rounded-br-2xl font-black uppercase tracking-wider text-sm sm:text-base transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <Phone className="w-5 h-5" /> Tư vấn miễn phí
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
