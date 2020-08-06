import Head from 'next/head';
import Layout, { siteTitle } from '~/components/layout';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import { PortfolioItemType } from '~/common/types';
import { retrieveJsonContent } from '~/common/utils';
import { Section } from '~/components/section';
import GitHubIcon from '~/public/svg/github.svg';
import LinkIcon from '~/public/svg/link.svg';

export default function Project({
  portfolioItem,
  nextItem,
}: {
  portfolioItem: PortfolioItemType;
  nextItem: string;
}) {
  const {
    id,
    project,
    type,
    date,
    shortDescription,
    longDescription,
    tags,
    github,
    link,
    imageLink,
    altText,
  }: PortfolioItemType = portfolioItem;
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section id="portfolio-item" paddingYOverride="py-32">
        <div className="flex justify-center flex-wrap -mx-6">
          <div className="lg:w-1/2 px-6">
            <h2 className="text-3xl py-2">{project}</h2>
            <p className="pb-2">
              {type}
              {' | '}
              {date}
            </p>
            <div className="flex flex-wrap">
              {tags.map((tag: string, index) => (
                <span className="text-yellow-600 pr-3 mb-2" key={index}>
                  #{tag}{' '}
                </span>
              ))}
            </div>
            {longDescription.map((paragraph: string, index) => (
              <p key={index} className="pb-2 text-justify">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap mb-4">
              {github.length > 0 && (
                <a href={github}>
                  <GitHubIcon className="fill-current mr-3" />
                </a>
              )}{' '}
              {link.length > 0 && (
                <a href={link}>
                  <LinkIcon className="fill-current" />
                </a>
              )}
            </div>
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
            <img className="rounded-lg" src={'../' + imageLink} alt={altText} />
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
