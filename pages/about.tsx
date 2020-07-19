import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { PropsWithChildren } from 'react';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex justify-center">
        <div className="flex-1 max-w-1600">
          <div className="flex flex-wrap">
            <div className="w-2/5 text-center">
              <img
                className="rounded-full"
                src="/images/profile.jpg"
                alt="Image of me"
              ></img>
            </div>
            <div className="w-3/5 text-center">Lil</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
