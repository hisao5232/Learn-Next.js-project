// app/ui/fonts.ts
import { Inter, Lusitana } from 'next/font/google'; // ★Lusitanaを追加

export const inter = Inter({ subsets: ['latin'] });

// ★Lusitanaをセットアップ。weightを指定
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
