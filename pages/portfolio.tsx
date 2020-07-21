import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { PropsWithChildren } from 'react';
import { Url } from 'url';
import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import GitHubIcon from '~/public/svg/github.svg';
import LinkIcon from '~/public/svg/link.svg';

interface PortfolioContentItem {
  project: string;
  type: string;
  date: string;
  description: string;
  tags: string[];
  github: string;
  link: Url;
  imageLink: string;
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
          <div className="flex flex-wrap">
            {portfolioItems.map((portfolioItem: PortfolioContentItem) => (
              <div className="w-full lg:w-1/3 px-8">
                <div className="flex flex-col mb-10">
                  <div className="square bg-blue-600 mb-4">
                    <img className="" src={portfolioItem.imageLink}></img>
                  </div>
                  <h2 className="text-3xl pb-2">{portfolioItem.project}</h2>
                  <p className="pb-2">
                    {portfolioItem.type}
                    {' | '}
                    {portfolioItem.date}
                  </p>
                  <p className="pb-2">{portfolioItem.description}</p>
                  <div className="flex flex-wrap">
                    {portfolioItem.tags.map((tag: string) => (
                      <span className="text-yellow-600 pr-3 mb-2">#{tag} </span>
                    ))}
                    {portfolioItem.github.length > 0 ? (
                      <a href={portfolioItem.github}>
                        <GitHubIcon className="fill-current mr-3" />
                      </a>
                    ) : (
                      <GitHubIcon className="fill-current text-gray-500 mr-3" />
                    )}{' '}
                    <LinkIcon className="fill-current" />
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
