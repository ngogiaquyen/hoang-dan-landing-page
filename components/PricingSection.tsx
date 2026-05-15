"use client";

import { motion } from 'motion/react';

import type { ScrollToOrder } from './sectionTypes';

type PricingSectionProps = {
  onSelectPackage: ScrollToOrder;
};

const packages = [
  {
    id: 1,
    title: "Liệu Trình 1",
    subtitle: "GÓI TRẢI NGHIỆM",
    price: process.env.NEXT_PUBLIC_PRICE_PKG_1 || "150k",
    quantity: "15 Gói Thảo Dược",
    features: ["Miễn phí vận chuyển", "HDSD chi tiết đính kèm"],
    image: "/images/package-1.webp",
    borderColor: "border-[#e9f5db]",
    gradient: "from-white to-green-50",
    titleColor: "text-[#606c38]",
    priceColor: "text-[#283618]",
    buttonClass: "bg-[#606c38] hover:bg-[#4b552b] text-white",
    checkBg: "bg-green-100",
  },
  {
    id: 2,
    title: "Liệu Trình 2",
    subtitle: "CHĂM SÓC CHUYÊN SÂU",
    price: process.env.NEXT_PUBLIC_PRICE_PKG_2 || "280k",
    quantity: "30 Gói Thảo Dược",
    features: ["Miễn phí vận chuyển", "Tiết kiệm 20.000đ", "Tặng kèm túi lọc"],
    image: "/images/package-2.webp",
    popular: true,
    borderColor: "border-[#bc6c25]",
    gradient: "from-white to-orange-50",
    titleColor: "text-[#283618]",
    priceColor: "text-[#283618]",
    buttonClass: "bg-[#bc6c25] hover:bg-[#a05a1d] text-white",
    checkBg: "bg-[#fefae0]",
  },
  {
    id: 3,
    title: "Liệu Trình 3",
    subtitle: "TIẾT KIỆM TỐI ĐA",
    price: process.env.NEXT_PUBLIC_PRICE_PKG_3 || "400k",
    quantity: "60 Gói Thảo Dược",
    features: ["Miễn phí vận chuyển tận nhà", "Tư vấn 1:1 định kỳ"],
    image: "/images/package-3.webp",
    promo: "🔥 Mua 3 Tặng 1",
    borderColor: "border-[#1a4331]",
    gradient: "bg-[#1a4331]",
    titleColor: "text-green-200",
    priceColor: "text-white",
    buttonClass: "bg-[#dda15e] hover:bg-[#c89255] text-[#283618]",
    checkBg: "bg-white/20",
    isDark: true,
  },
];

export default function PricingSection({ onSelectPackage }: PricingSectionProps) {
  return (
    <section className="py-8 max-w-[480px] mx-auto px-4 relative z-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-outfit font-bold text-[#1a3a2a] mb-3 uppercase tracking-tight leading-tight">
          Các Liệu Trình Khuyên Dùng
        </h2>
        <div className="w-16 h-1 bg-[#bc6c25] mx-auto mb-4"></div>
        <p className="text-[#5c6b61] text-[14px] font-medium leading-relaxed">
          Chọn liệu trình phù hợp với nhu cầu của bạn. Mua càng nhiều, ưu đãi càng lớn.
        </p>
      </div>

      <div className="space-y-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex flex-col overflow-hidden rounded-[2rem] border-2 ${pkg.borderColor} ${pkg.gradient} shadow-xl transition-transform duration-300 hover:scale-[1.01]`}
          >
            {pkg.popular && (
              <div className="absolute top-3 right-3 z-20 bg-[#bc6c25] text-white px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase shadow-lg">
                Phổ Biến Nhất
              </div>
            )}

            {/* Package Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="mb-4">
                <h3 className={`text-lg font-bold uppercase ${pkg.titleColor}`}>{pkg.title}</h3>
                <p className={`text-[10px] font-bold tracking-widest mt-0.5 opacity-70 ${pkg.isDark ? 'text-[#dda15e]' : 'text-[#bc6c25]'}`}>
                  {pkg.subtitle}
                </p>
              </div>

              <div className="mb-5">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-black ${pkg.priceColor}`}>{pkg.price}</span>
                  <span className={`text-xs font-bold opacity-70 ${pkg.isDark ? 'text-white' : 'text-[#283618]'}`}>/liệu trình</span>
                </div>
                <p className={`font-bold mt-1 text-base ${pkg.isDark ? 'text-green-100' : 'text-[#283618]'}`}>{pkg.quantity}</p>
              </div>

              {pkg.promo && (
                <div className="bg-white/10 p-2.5 rounded-xl mb-5 border border-white/20 backdrop-blur-sm animate-attention">
                  <p className="text-xs font-black text-[#dda15e] uppercase tracking-tighter text-center">{pkg.promo}</p>
                </div>
              )}

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-2.5 font-semibold text-sm ${pkg.isDark ? 'text-white' : 'text-[#283618]'}`}>
                    <div className={`w-5 h-5 ${pkg.checkBg} rounded-full flex items-center justify-center flex-shrink-0 text-[10px] shadow-sm`}>
                      ✓
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelectPackage(pkg.id)}
                className={`w-full py-3.5 ${pkg.buttonClass} rounded-xl font-black uppercase tracking-wider shadow-lg transition-all hover:scale-105 active:scale-95 text-sm`}
              >
                {pkg.popular ? 'Ưu Đãi Đặc Biệt' : 'Chọn Mua Ngay'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


