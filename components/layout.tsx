import Head from 'next/head';
import Navigation from './navigation';
import { useContext } from 'react';
import { ThemeContext } from './theme-provider';

export const siteTitle = 'Hayden Griffin';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === `light` ? `theme-light` : 'theme-dark'}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Hayden Griffin Personal Site" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navigation />
      {children}
    </div>
  );
}
