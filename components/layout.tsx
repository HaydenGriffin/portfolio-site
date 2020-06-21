import Head from 'next/head';
import styles from './layout.module.css';
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
        <meta name="description" content="Hayden Griffin Portfolio Site" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navigation />
      <header className={styles.header}></header>
      <main>{children}</main>
    </div>
  );
}
