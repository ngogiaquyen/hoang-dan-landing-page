import { Leaf } from 'lucide-react';

import type { ScrollToOrder } from './sectionTypes';

type NavbarSectionProps = {
  onOrderClick: ScrollToOrder;
};

export default function NavbarSection({ onOrderClick }: NavbarSectionProps) {
  return (
    <nav className="fixed top-0 w-full max-w-[480px] left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md z-50 border-b border-[#e9f5db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1a4331] rounded-lg flex items-center justify-center">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className="font-black text-xl lg:text-2xl tracking-tighter uppercase text-[#1a4331]">Hoàng Đằng Rừng</span>
        </div>
        <button
          onClick={() => onOrderClick()}
          className="bg-[#bc6c25] hover:bg-[#a05a1d] text-white px-4 lg:px-6 py-2.5 rounded-full font-bold shadow-lg text-xs tracking-widest uppercase transition-all animate-attention hover:scale-110 active:scale-95"
        >
          Đặt hàng ngay
        </button>
      </div>
    </nav>
  );
}
