import Head from 'next/head';
import Navigation from './navigation';

const name = '[Your Name]';
export const siteTitle = 'Hayden Griffin';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Hayden Griffin Personal Site" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Navigation />
        <main>
          <div>{children}</div>
        </main>
      </body>
    </div>
  );
}
