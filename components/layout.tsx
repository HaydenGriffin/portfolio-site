import Head from 'next/head';
import Link from 'next/link';
import Navigation from './navigation';

const name = '[Your Name]';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
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
          <div className="invisible sm:visible sm:w-80">
            <Navigation />
          </div>
          <div className="w-full bg-gray-400">{children}</div>
        </div>
        {!home && (
          <div>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
