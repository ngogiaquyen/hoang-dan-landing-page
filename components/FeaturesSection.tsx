import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Truck } from 'lucide-react';

const features = [
  { icon: Leaf, title: 'Chuẩn Rừng 100%', desc: 'Cây già lâu năm, vân hoa rực rỡ, dược tính cao.' },
  { icon: ShieldCheck, title: 'Sạch & An Toàn', desc: 'Thái lát máy mỏng đều, sấy khô kiệt không chất bảo quản.' },
  { icon: Truck, title: 'Giao Hàng Tận Nơi', desc: 'Kiểm tra hàng trước khi thanh toán, freeship mọi đơn.' },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#283618] py-16 text-[#fefae0] relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-[1rem] bg-[#606c38] flex items-center justify-center flex-shrink-0 shadow-lg mt-1">
                <feature.icon className="w-6 h-6 text-[#fefae0]" />
              </div>
              <div>
                <h3 className="font-black text-xl text-white mb-1 uppercase tracking-widest">{feature.title}</h3>
                <p className="text-[#ccd5ae] leading-relaxed font-medium">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
