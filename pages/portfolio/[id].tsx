import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import path from 'path';
import fs from 'fs';
import { PortfolioContentItem } from '../../@types/Portfolio';
import retrieveJsonContent from '../../util/json-retrieve';

export default function Project({
  portfolioItem,
  nextItem,
}: {
  portfolioItem: PortfolioContentItem;
  nextItem: string;
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex justify-center mt-10">
        <div className="flex-1 max-w-1600">
          <h2>{portfolioItem.id}</h2>
          <img
            className="rounded-lg"
            src={'../' + portfolioItem.imageLink}
            alt={portfolioItem.altText}
          />
        </div>
      </div>
      {nextItem.length > 0 && <Link href={nextItem}>Lol</Link>}
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const fileContent = retrieveJsonContent('portfolio.json');
  let portfolioItems: PortfolioContentItem[] = JSON.parse(fileContent);

  const paths = portfolioItems.map((portfolioItem) => ({
    params: { id: portfolioItem.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const fileContent = retrieveJsonContent('portfolio.json');
  let portfolioItems: PortfolioContentItem[] = JSON.parse(fileContent);
  const id = context?.params?.id;

  const index = portfolioItems.findIndex(
    (portfolioItem) => portfolioItem.id == id
  );

  const portfolioItem = portfolioItems[index];
  let nextItem = '';

  if (index + 1 < portfolioItems.length) {
    nextItem = portfolioItems[index + 1].id;
  }

  console.log(nextItem);

  return {
    props: {
      portfolioItem,
      nextItem,
    },
  };
};
