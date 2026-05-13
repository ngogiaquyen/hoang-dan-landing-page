import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

type OrderSectionProps = {
  selectedPackage: number | null;
  setSelectedPackage: (packageId: number) => void;
};

const packages = [
  { id: 1, name: 'Liệu Trình 1 (15 Gói) - 150.000đ' },
  { id: 2, name: 'Liệu Trình 2 (30 Gói) - 280.000đ' },
  { id: 3, name: 'Liệu Trình 3 (60 Gói) - 400.000đ [MUA 3 TẶNG 1] (Khuyên dùng)' },
];

export default function OrderSection({ selectedPackage, setSelectedPackage }: OrderSectionProps) {
  return (
    <section id="order-section" className="bg-[#283618] py-8 px-0 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:20px_20px]"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#fefae0] rounded-[1rem] py-10 px-4 lg:p-16 shadow-2xl relative"
        >
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#bc6c25] rounded-full blur-2xl opacity-40"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#606c38] rounded-full blur-2xl opacity-40"></div>

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-4xl font-black text-[#283618] mb-4 tracking-tighter">Thông Tin Nhận Hàng</h2>
            <p className="text-[#606c38] font-medium text-lg">Vui lòng điền đầy đủ thông tin, chúng tôi sẽ liên hệ lại ngay.</p>
          </div>

          <form className="space-y-6 relative z-10" onSubmit={(event) => event.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#606c38] uppercase tracking-widest mb-2">Họ và tên *</label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  required
                  className="w-full bg-white border-2 border-[#e9f5db] rounded-2xl px-4 py-4 text-[#283618] font-semibold focus:outline-none focus:border-[#bc6c25] focus:ring-4 focus:ring-[#bc6c25]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#606c38] uppercase tracking-widest mb-2">Số điện thoại *</label>
                <input
                  type="tel"
                  placeholder="09xx xxx xxx"
                  required
                  className="w-full bg-white border-2 border-[#e9f5db] rounded-2xl px-4 py-4 text-[#283618] font-semibold focus:outline-none focus:border-[#bc6c25] focus:ring-4 focus:ring-[#bc6c25]/10 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#606c38] uppercase tracking-widest mb-2">Địa chỉ giao hàng chi tiết *</label>
              <input
                type="text"
                placeholder="Số nhà, Đường, Phường/Xã, Quận/Huyện, Tỉnh/TP"
                required
                className="w-full bg-white border-2 border-[#e9f5db] rounded-2xl px-4 py-4 text-[#283618] font-semibold focus:outline-none focus:border-[#bc6c25] focus:ring-4 focus:ring-[#bc6c25]/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#606c38] uppercase tracking-widest mb-4">Lựa chọn liệu trình *</label>
              <div className="space-y-3">
                {packages.map((pkg) => (
                  <label
                    key={pkg.id}
                    className={`flex items-center p-5 border-2 rounded-2xl cursor-pointer transition-all ${selectedPackage === pkg.id
                      ? 'border-[#bc6c25] bg-white ring-4 ring-[#bc6c25]/10'
                      : 'border-[#e9f5db] bg-white hover:border-[#bc6c25]/50'
                      }`}
                  >
                    <input
                      type="radio"
                      name="package"
                      value={pkg.id}
                      checked={selectedPackage === pkg.id}
                      onChange={() => setSelectedPackage(pkg.id)}
                      className="w-5 h-5 text-[#bc6c25] border-[#e9f5db] focus:ring-[#bc6c25] focus:ring-2 cursor-pointer"
                    />
                    <span className={`ml-4 font-bold ${selectedPackage === pkg.id ? 'text-[#bc6c25]' : 'text-[#283618]'}`}>{pkg.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#606c38] uppercase tracking-widest mb-2">Ghi chú thêm (nếu có)</label>
              <textarea
                rows={3}
                className="w-full bg-white border-2 border-[#e9f5db] rounded-2xl px-4 py-4 text-[#283618] font-semibold focus:outline-none focus:border-[#bc6c25] focus:ring-4 focus:ring-[#bc6c25]/10 transition-all resize-none"
                placeholder="Thời gian nhận hàng thuận tiện..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#bc6c25] hover:bg-[#a05a1d] text-white px-8 py-5 rounded-2xl font-black text-lg tracking-wider uppercase shadow-lg transition-all hover:shadow-xl mt-4 flex justify-center items-center gap-2"
            >
              Xác Nhận Đặt Hàng <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-sm font-semibold text-[#606c38] mt-4 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 mr-2 text-[#bc6c25]" />
              Chúng tôi cam kết bảo mật thông tin của bạn
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
