import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { GetStaticProps } from 'next';
import { PortfolioItemType } from '../common/types';
import { retrieveJsonContent } from '../common/utils';
import { Section } from '~/components/section';
import { PortfolioItem } from '~/components/portfolio-item';

export default function Portfolio({
  portfolioItems,
}: {
  portfolioItems: PortfolioItemType[];
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section id="portfolio">
        <div className="flex flex-wrap justify-center portfolio-grid">
          {portfolioItems.map((portfolioItem: PortfolioItemType, index) => (
            <PortfolioItem
              key={index}
              index={index}
              portfolioItem={portfolioItem}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const fileContent = retrieveJsonContent('portfolio.json');
  let portfolioItems: PortfolioItemType[] = JSON.parse(fileContent);

  return {
    props: {
      portfolioItems,
    },
  };
};
