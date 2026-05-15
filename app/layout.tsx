import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoàng Đằng Rừng - Dược Liệu Quý Từ Thiên Nhiên | Sạch - An Toàn",
  description: "Hoàng Đằng Rừng tự nhiên, sạch sẽ, an toàn. Quy trình chế biến thủ công giữ trọn dược tính quý giá. Hỗ trợ tiêu hóa, tăng cường sức khỏe.",
  keywords: ["hoàng đằng rừng", "dược liệu sạch", "thảo dược thiên nhiên", "trà thảo dược", "hoàng đằng khô"],
  openGraph: {
    type: "website",
    url: "https://hoangdangrung.online/",
    title: "Hoàng Đằng Rừng - Tinh Hoa Thảo Dược Quý Hiếm",
    description: "Hoàng Đằng Rừng tự nhiên, sạch sẽ, an toàn. Quy trình chế biến thủ công giữ trọn dược tính quý giá. Hỗ trợ tiêu hóa, tăng cường sức khỏe.",
    images: [
      {
        url: "/images/banner.webp",
        width: 1200,
        height: 630,
        alt: "Hoàng Đằng Rừng",
      },
    ],
    locale: "vi_VN",
    siteName: "Hoàng Đằng Rừng",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoàng Đằng Rừng - Tinh Hoa Thảo Dược Quý Hiếm",
    description: "Hoàng Đằng Rừng tự nhiên, sạch sẽ, an toàn. Quy trình chế biến thủ công giữ trọn dược tính quý giá.",
    images: ["/images/banner.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/images/favicon.webp" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
