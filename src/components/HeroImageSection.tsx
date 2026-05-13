import { motion } from 'motion/react';
import { PackageOpen } from 'lucide-react';

export default function HeroImageSection() {
  return (
    <section className="py-8 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-lg lg:max-w-2xl relative"
        >
          <div className="aspect-square lg:aspect-[16/9] rounded-3xl rounded-tr-none overflow-hidden shadow-2xl relative">
            <img
              src="/images/hero-banner-image.png"
              alt="Hoàng Đằng Rừng đóng gói"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-5 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-[#e9f5db]">
            <div className="w-12 h-12 bg-[#fefae0] rounded-full flex items-center justify-center text-[#bc6c25]">
              <PackageOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="font-black text-[#1a4331] uppercase tracking-wide">Sẵn sàng giao ngay</p>
              <p className="text-sm text-[#606c38] font-medium">Miễn phí vận chuyển toàn quốc</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
