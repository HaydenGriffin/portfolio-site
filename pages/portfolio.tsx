import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { PropsWithChildren } from 'react';
import { Url } from 'url';
import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import GitHubIcon from '~/public/svg/github.svg';
import LinkIcon from '~/public/svg/link.svg';
import { PortfolioContentItem } from '../@types/Portfolio';
import retrieveJsonContent from '../util/json-retrieve';

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
      <div className="flex justify-center mt-10">
        <div className="flex-1 max-w-1600 lg:px-2">
          <div className="flex flex-wrap justify-center portfolio-grid">
            {portfolioItems.map(
              (portfolioItem: PortfolioContentItem, index) => (
                <div
                  className="w-full portfolio-item md:w-1/2 lg:w-1/3 px-6 mb-8"
                  key={index}
                >
                  <div className="flex flex-col mb-10 bg-gray-100 rounded-lg p-4 h-full">
                    <a href={'portfolio/' + portfolioItem.id}>
                      <img
                        className="rounded-lg"
                        src={portfolioItem.imageLink}
                        alt={portfolioItem.altText}
                      />
                      <h2 className="text-3xl py-2">{portfolioItem.project}</h2>
                      <p className="pb-2">
                        {portfolioItem.type}
                        {' | '}
                        {portfolioItem.date}
                      </p>
                      <p className="pb-2">{portfolioItem.shortDescription}</p>
                    </a>
                    <div className="flex flex-wrap">
                      {portfolioItem.tags.map((tag: string, index) => (
                        <span className="text-yellow-600 pr-3 mb-2" key={index}>
                          #{tag}{' '}
                        </span>
                      ))}
                      {portfolioItem.github.length > 0 && (
                        <a href={portfolioItem.github}>
                          <GitHubIcon className="fill-current mr-3" />
                        </a>
                      )}{' '}
                      {portfolioItem.link.length > 0 && (
                        <a href={portfolioItem.link}>
                          <LinkIcon className="fill-current" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const fileContent = retrieveJsonContent('portfolio.json');
  let portfolioItems: PortfolioContentItem[] = JSON.parse(fileContent);

  return {
    props: {
      portfolioItems,
    },
  };
};
