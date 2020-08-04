import Head from 'next/head';
import Layout, { siteTitle } from '~/components/layout';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import { PortfolioItemType } from '~/common/types';
import { retrieveJsonContent } from '~/common/utils';
import { Section } from '~/components/section';

export default function Project({
  portfolioItem,
  nextItem,
}: {
  portfolioItem: PortfolioItemType;
  nextItem: string;
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section id="portfolio-item" paddingYOverride="py-32">
        <div className="flex justify-center flex-wrap -mx-6">
          <div className="lg:w-1/2 px-6">
            <h2 className="text-3xl py-2">{portfolioItem.project}</h2>
            <p className="pb-2">
              {portfolioItem.type}
              {' | '}
              {portfolioItem.date}
            </p>
            <div className="flex flex-wrap">
              {portfolioItem.tags.map((tag: string, index) => (
                <span className="text-yellow-600 pr-3 mb-2" key={index}>
                  #{tag}{' '}
                </span>
              ))}
            </div>
            {portfolioItem.longDescription.map((paragraph: string) => (
              <p className="pb-2 text-justify">{paragraph}</p>
            ))}
            {nextItem.length > 0 ? (
              <Link href={nextItem}>
                <a>View next project</a>
              </Link>
            ) : (
              <Link href="/portfolio">
                <a>Back to projects</a>
              </Link>
            )}
          </div>
          <div className="lg:w-1/2 px-6">
            <img
              className="rounded-lg"
              src={'../' + portfolioItem.imageLink}
              alt={portfolioItem.altText}
            />
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const fileContent = retrieveJsonContent('portfolio.json');
  let portfolioItems: PortfolioItemType[] = JSON.parse(fileContent);

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
  let portfolioItems: PortfolioItemType[] = JSON.parse(fileContent);
  const id = context?.params?.id;

  const index = portfolioItems.findIndex(
    (portfolioItem) => portfolioItem.id == id
  );

  const portfolioItem = portfolioItems[index];
  let nextItem = '';

  if (index < portfolioItems.length - 1) {
    nextItem = portfolioItems[index + 1].id;
  }

  return {
    props: {
      portfolioItem,
      nextItem,
    },
  };
};
