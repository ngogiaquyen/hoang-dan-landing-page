"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2, Loader2, X, AlertCircle } from 'lucide-react';

type OrderSectionProps = {
  selectedPackage: number | null;
  setSelectedPackage: (packageId: number) => void;
};

const allPackages = [
  { id: 1, name: `Liệu Trình 1 (15 Gói) - ${process.env.NEXT_PUBLIC_PRICE_PKG_1 || '150.000đ'}` },
  { id: 2, name: `Liệu Trình 2 (30 Gói) - ${process.env.NEXT_PUBLIC_PRICE_PKG_2 || '280.000đ'}`, isVisible: !!process.env.NEXT_PUBLIC_PRICE_PKG_2 },
  { id: 3, name: `Liệu Trình 3 (60 Gói) - ${process.env.NEXT_PUBLIC_PRICE_PKG_3 || '400.000đ'} [MUA 3 TẶNG 1] (Khuyên dùng)`, isVisible: !!process.env.NEXT_PUBLIC_PRICE_PKG_3 },
];

const rawPackages = allPackages.filter(pkg => pkg.id === 1 || pkg.isVisible);

// Nếu chỉ có 1 gói, rút gọn tên (bỏ chữ Liệu Trình 1)
const packages = rawPackages.length === 1 
  ? rawPackages.map(pkg => ({ ...pkg, name: pkg.name.replace(/^Liệu Trình \d+ /, '') }))
  : rawPackages;



export default function OrderSection({ selectedPackage, setSelectedPackage }: OrderSectionProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    note: '',
  });

  // Tự động chọn gói nếu chỉ có 1 gói duy nhất
  useEffect(() => {
    if (packages.length === 1 && selectedPackage !== packages[0].id) {
      setSelectedPackage(packages[0].id);
    }
  }, [packages.length, selectedPackage, setSelectedPackage]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPackage) {
      alert('Vui lòng chọn liệu trình trước khi đặt hàng!');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || '';

    const data = {
      ...formData,
      package: packages.find(p => p.id === selectedPackage)?.name,
      sourceUrl: window.location.origin, // Tự động lấy link web đang chạy (hoangdang.online hoặc hoangdangrung.online)
    };

    try {
      const formDataToSend = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formDataToSend.append(key, value as string);
      });

      // Gửi dữ liệu bằng no-cors để tránh lỗi chặn đứng request
      await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors',
      });

      // Giả lập trễ 1s để người dùng thấy trạng thái đang xử lý cho mượt
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', phone: '', address: '', note: '' });
        setSelectedPackage(0);
      }, 1000);

    } catch (error) {
      console.error('Error!', error);
      setStatus('error');
      setErrorMessage('Không thể kết nối với máy chủ. Vui lòng thử lại sau hoặc gọi Hotline.');
    }
  };

  const closeModal = () => setStatus('idle');

  return (
    <section id="order-section" className="bg-[#283618] py-12 px-0 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#fefae0] rounded-[2rem] py-10 px-6 lg:p-16 shadow-2xl relative"
        >
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#bc6c25] rounded-full blur-2xl opacity-40"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#606c38] rounded-full blur-2xl opacity-40"></div>

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-4xl font-outfit font-bold text-[#1a3a2a] mb-4 tracking-tight">Thông Tin Nhận Hàng</h2>
            <p className="text-[#606c38] font-medium text-lg">Chúng tôi sẽ liên hệ lại ngay để xác nhận đơn hàng.</p>
          </div>

          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-xs font-bold text-[#606c38] uppercase tracking-widest mb-2">Họ và tên *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nguyễn Văn A"
                  required
                  className="w-full bg-white border-2 border-[#e9f5db] rounded-2xl px-4 py-4 text-[#283618] font-semibold focus:outline-none focus:border-[#bc6c25] focus:ring-4 focus:ring-[#bc6c25]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#606c38] uppercase tracking-widest mb-2">Số điện thoại *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Số nhà, Đường, Phường/Xã, Quận/Huyện, Tỉnh/TP"
                required
                className="w-full bg-white border-2 border-[#e9f5db] rounded-2xl px-4 py-4 text-[#283618] font-semibold focus:outline-none focus:border-[#bc6c25] focus:ring-4 focus:ring-[#bc6c25]/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#606c38] uppercase tracking-widest mb-4">
                {packages.length > 1 ? "Lựa chọn liệu trình *" : "Gói sản phẩm bạn chọn *"}
              </label>

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
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                className="w-full bg-white border-2 border-[#e9f5db] rounded-2xl px-4 py-4 text-[#283618] font-semibold focus:outline-none focus:border-[#bc6c25] focus:ring-4 focus:ring-[#bc6c25]/10 transition-all resize-none"
                placeholder="Thời gian nhận hàng thuận tiện..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#bc6c25] hover:bg-[#a05a1d] text-white px-5 py-5 rounded-2xl font-black text-lg tracking-wider uppercase shadow-lg transition-all hover:shadow-xl mt-4 flex justify-center items-center gap-2"
            >
              Xác Nhận Đặt Hàng <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-sm font-semibold text-[#606c38] mt-4 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 mr-2 text-[#bc6c25]" />
              Cam kết bảo mật thông tin 100%
            </p>
          </form>
        </motion.div>
      </div>

      {/* Shared Modal Overlay */}
      <AnimatePresence>
        {status !== 'idle' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={status !== 'submitting' ? closeModal : undefined}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative z-10 max-w-sm w-full text-center"
            >
              {status === 'submitting' && (
                <div className="py-4">
                  <Loader2 className="w-16 h-16 text-[#bc6c25] mx-auto animate-spin mb-6" />
                  <h3 className="text-2xl font-black text-[#283618] mb-2 font-outfit uppercase">Đang Xử Lý</h3>
                  <p className="text-[#606c38] font-medium">Chúng tôi đang lưu thông tin đơn hàng...</p>
                </div>
              )}

              {status === 'success' && (
                <div className="py-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-[#283618]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#283618] mb-2 font-outfit uppercase">Thành Công!</h3>
                  <p className="text-[#606c38] font-medium mb-8">
                    Đơn hàng đã được gửi đi. Hoàng Đằng Rừng sẽ liên hệ lại sớm nhất!
                  </p>
                  <button
                    onClick={closeModal}
                    className="w-full bg-[#bc6c25] text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-[#a05a1d] transition-all"
                  >
                    Xong
                  </button>
                </div>
              )}

              {status === 'error' && (
                <div className="py-4">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="w-12 h-12 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-black text-red-600 mb-2 font-outfit uppercase">Thất Bại</h3>
                  <p className="text-[#606c38] font-medium mb-8">{errorMessage}</p>
                  <button
                    onClick={closeModal}
                    className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold shadow-lg transition-all"
                  >
                    Quay lại
                  </button>
                </div>
              )}

              {status !== 'submitting' && (
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-[#606c38] hover:text-[#283618] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
