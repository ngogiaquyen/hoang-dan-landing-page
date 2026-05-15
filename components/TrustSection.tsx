type TrustSectionProps = {
  src?: string;
  alt?: string;
};

export default function TrustSection({
  src = '/images/trust.webp',
  alt = 'Hoàng Đằng Rừng',
}: TrustSectionProps) {
  return (
    <section className="pt-8 px-margin-mobile md:px-margin-desktop bg-surface relative z-10 herbal-watermark">
      <img
        className="w-full h-auto object-cover"
        src={src}
        alt={alt}
      />
    </section>
  );
}
