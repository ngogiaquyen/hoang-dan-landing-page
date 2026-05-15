"use client";

import { Leaf } from 'lucide-react';

import type { ScrollToOrder } from './sectionTypes';

type FooterSectionProps = {
  onSelectPackage: ScrollToOrder;
};

export default function FooterSection({ onSelectPackage }: FooterSectionProps) {
  return (
    <footer className="relative z-10 bg-[#1a2310] pt-20 pb-10 px-6 font-medium text-[#e9f5db]/60 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <a href="#" className="text-3xl font-black text-white tracking-tighter uppercase inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-8 bg-[#bc6c25] rounded-full inline-flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </span>
            Hoàng Đằng Rừng
          </a>
          <p className="max-w-sm mb-4">Chuyên cung cấp Hoàng Đằng Rừng nguyên chất, đảm bảo chất lượng cao nhất mang lại sức khỏe cho gia đình bạn.</p>
          <p className="max-w-xl text-xs opacity-60 border-t border-white/10 pt-4 mt-4">
            * Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh. Tác dụng có thể khác nhau tùy cơ địa mỗi người.
            Vui lòng tham khảo ý kiến bác sĩ trước khi sử dụng nếu bạn có bệnh lý nền.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Liệu Trình</h4>
          <ul className="space-y-4">
            <li>
              <button onClick={() => onSelectPackage(1)} className="hover:text-white transition-colors cursor-pointer text-left">
                Liệu Trình 15 Gói
              </button>
            </li>
            {process.env.NEXT_PUBLIC_PRICE_PKG_2 && (
              <li>
                <button onClick={() => onSelectPackage(2)} className="hover:text-white transition-colors cursor-pointer text-left">
                  Liệu Trình 30 Gói
                </button>
              </li>
            )}
            {process.env.NEXT_PUBLIC_PRICE_PKG_3 && (
              <li>
                <button onClick={() => onSelectPackage(3)} className="hover:text-white transition-colors cursor-pointer text-left">
                  Liệu Trình 60 Gói
                </button>
              </li>
            )}

          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Liên Hệ</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 hover:text-white transition-colors">
              Hotline: <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`} className="font-semibold text-white">{process.env.NEXT_PUBLIC_CONTACT_PHONE}</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition-colors">
              Zalo: <a href={`https://zalo.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE?.replace(/\D/g, '')}`} className="font-semibold text-white" target="_blank" rel="noopener noreferrer">{process.env.NEXT_PUBLIC_CONTACT_PHONE}</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition-colors">
              Email: <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-xs">
        <p>&copy; {new Date().getFullYear()} Bản quyền thuộc về Hoàng Đằng Rừng.</p>
        <div className="space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
          <a href="#" className="hover:text-white transition-colors">Điều khoản bổ sung</a>
        </div>
      </div>
    </footer>
  );
}
