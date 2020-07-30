import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { GetStaticProps } from 'next';
import { PortfolioItemInterface } from '../@types/Portfolio';
import retrieveJsonContent from '../util/json-retrieve';
import { Section } from '~/components/section';
import { PortfolioItem } from '~/components/portfolio-item';

export default function Portfolio({
  portfolioItems,
}: {
  portfolioItems: PortfolioItemInterface[];
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section id="portfolio">
        <div className="flex flex-wrap justify-center portfolio-grid">
          {portfolioItems.map(
            (portfolioItem: PortfolioItemInterface, index) => (
              <PortfolioItem
                key={index}
                index={index}
                portfolioItem={portfolioItem}
              />
            )
          )}
        </div>
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const fileContent = retrieveJsonContent('portfolio.json');
  let portfolioItems: PortfolioItemInterface[] = JSON.parse(fileContent);

  return {
    props: {
      portfolioItems,
    },
  };
};
