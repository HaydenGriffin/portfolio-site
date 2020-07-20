import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { PropsWithChildren } from 'react';
import { Url } from 'url';
import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';

interface PortfolioContentItem {
  project: string;
  type: string;
  date: Date;
  description: string;
  tags: string[];
  github: Url;
  link: Url;
}

export default function Portfolio({
  portfolioItems,
}: {
  portfolioItems: PortfolioContentItem[];
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex justify-center p-10">
        <div className="flex-1 max-w-1600">
          <div className="flex justify-center flex-wrap -mx-8">
            {portfolioItems.map((portfolioItem: PortfolioContentItem) => (
              <div className="w-full lg:w-1/3 px-8">
                <div className="flex flex-col mb-10">
                  <div className="square bg-blue-600 pb-64 mb-4">Test</div>
                  <p className="text-3xl">{portfolioItem.project}</p>
                  <p>{portfolioItem.type}</p>
                  <p>{portfolioItem.date}</p>
                  <p>{portfolioItem.description}</p>
                  <div className="flex flex-wrap">
                    {portfolioItem.tags.map((tag: string) => (
                      <span className="text-yellow-600 p-2">#{tag} </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const contentDirectory = path.join(process.cwd(), 'public/content');
  const portfolioFilePath = path.join(contentDirectory, 'portfolio.json');
  const fileContent = fs.readFileSync(portfolioFilePath, 'utf-8');
  let portfolioItems: PortfolioContentItem[] = JSON.parse(fileContent);

  return {
    props: {
      portfolioItems,
    },
  };
};
