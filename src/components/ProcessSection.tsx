import React from 'react';

const steps = [
  {
    id: 1,
    title: "Thu Hái Tự Nhiên",
    description: "Khai thác rễ Hoàng Đằng già tại vùng rừng sâu, chỉ chọn rễ có màu vàng tươi đậm.",
    image: "/images/process-1.webp",
  },
  {
    id: 2,
    title: "Sơ Chế & Thái Lát",
    description: "Rửa sạch, loại bỏ tạp chất và thái rễ thành các phiến tròn đều, đẹp mắt.",
    image: "/images/process-2.webp",
  },
  {
    id: 3,
    title: "Phơi Khô Tự Nhiên",
    description: "Phơi khô rễ đã thái trên mẹt tre dưới ánh nắng và gió tự nhiên để bảo quản.",
    image: "/images/process-3.webp",
  },
  {
    id: 4,
    title: "Đóng Gói Thành Phẩm",
    description: "Lựa chọn phiến khô đều màu, đóng gói trong bao bì cao cấp, sang trọng, có tem nhãn.",
    image: "/images/process-4.webp",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-8 bg-[#fdfdfb] relative overflow-hidden">
      {/* Subtle marble-like texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/marble-similar.png")',
          backgroundSize: '400px'
        }}
      ></div>

      <div className="relative z-10 px-6 max-w-[480px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#1a3a2a] mb-3 tracking-tight">
            Quy Trình Chế Biến
          </h2>
          <p className="text-[15px] text-[#5c6b61] font-medium tracking-wide">
            Tuyển chọn kỹ lưỡng, giữ trọn vẹn dược tính quý giá
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const isEven = index % 2 !== 0;
            return (
              <div
                key={step.id}
                className={`flex items-center gap-6 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Image Frame with Double Border - Sharp Corners & No Padding */}
                <div className="w-[48%] flex-shrink-0">
                  <div className="relative bg-white border border-[#d4af37]/30 shadow-xl transform transition-transform hover:scale-105 duration-500">
                    <div className="relative border-2 border-[#d4af37]/15 overflow-hidden aspect-[4/3]">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-[52%] text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center text-white text-sm font-bold shadow-md border border-white/20">
                      {step.id}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#1a3a2a] leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[14px] text-[#4a5a4a] leading-relaxed font-sans font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



