import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex flex-grow fullscreen-with-nav justify-center items-center homepage-background">
        <div className="container text-center p-32 sm:p-40 md:p-48 lg:p-56 mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Hello, my name is Hayden. I'm a full stack developer.
          </h2>
        </div>
      </div>
    </Layout>
  );
}
