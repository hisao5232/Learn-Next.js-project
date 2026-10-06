import AcmeLogo from '@/app/ui/acme-logo';
import styles from '@/app/ui/home.module.css';
import InvoiceStatus from '@/app/ui/invoices/status'; // ★1. インポートを追加
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts'; // ★インポート
import Image from 'next/image'; // ★1. インポート

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">

          {/* ★ここに CSS Modules のクラスを適用した div を配置します */}
          <div className={styles.shape} />

          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        {/* ★2. ヒーロー画像エリアに<Image>コンポーネントを追加 */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/*Add Hero Images Here */}
          {/* デスクトップ用画像 */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          {/* ★モバイル用画像を追加 */}
          <Image
            src="/hero-mobile.png"
            width={560} // アスペクト比計算用のサイズ
            height={620} // アスペクト比計算用のサイズ
            className="block md:hidden" // Tailwind: デフォルトで表示、md画面以上で隠す
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
