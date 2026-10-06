// app/layout.tsx
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; // ★インポート

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ★bodyタグにinter.classNameと、Tailwindのantialiasedクラスを適用 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}