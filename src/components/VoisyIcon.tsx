// Voisy's head, used wherever a lucide icon would normally sit next to Voisy
export default function VoisyIcon({ size = 20 }: { size?: number }) {
  const px = Math.round(size * 1.5)
  return <img src="/voisy-icon.webp" alt="" width={px} height={px} className="voisy-icon" loading="lazy" decoding="async" />
}
