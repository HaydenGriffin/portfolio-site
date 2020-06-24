import Head from 'next/head';
import Link from 'next/link';
import Navigation from './navigation';

const name = '[Your Name]';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Hayden Griffin Personal Site" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header />
      <main>
        <div className="flex">
          <div className="invisible sm:visible sm:w-80 flex:none overflow-y-hidden">
            <Navigation />
          </div>
          <div className="flex-1 bg-gray-400 overflow-y-auto">
            <div className="flex h-screen bg-gray-200">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
