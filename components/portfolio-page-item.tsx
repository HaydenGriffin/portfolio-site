import { FC } from 'react';
import { PortfolioItemType } from '~/common/types';
import GitHubIcon from '~/public/svg/github.svg';
import LinkIcon from '~/public/svg/link.svg';
import Link from 'next/link';

type PortfolioItemProps = {
  nextPortfolioItemName: string;
  portfolioItem: PortfolioItemType;
};

const PortfolioItem: FC<PortfolioItemProps> = ({
  nextPortfolioItemName,
  portfolioItem,
}: PortfolioItemProps) => {
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
        {longDescription.map((paragraph: string) => (
          <p className="pb-2 text-justify">{paragraph}</p>
        ))}
        {nextPortfolioItemName.length > 0 ? (
          <Link href={nextPortfolioItemName}>
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
  );
};

export { PortfolioItem };
