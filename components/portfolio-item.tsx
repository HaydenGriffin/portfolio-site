import { Fragment } from 'react';
import { PortfolioItemInterface } from '~/@types/Portfolio';
import GitHubIcon from '~/public/svg/github.svg';
import LinkIcon from '~/public/svg/link.svg';
import Link from 'next/link';

interface PortfolioItemProps {
  index: number;
  portfolioItem: PortfolioItemInterface;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  index,
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
  }: PortfolioItemInterface = portfolioItem;

  return (
    <div className="portfolio-item md:w-1/2 lg:w-1/3 px-6 mb-8" key={index}>
      <div className="flex flex-col mb-10 bg-gray-100 rounded-lg p-4 h-full">
        <Link href="portfolio/[id]" as={'portfolio/' + id}>
          <a>
            <img className="rounded-lg" src={imageLink} alt={altText} />
            <h2 className="text-3xl py-2">{project}</h2>
            <p className="pb-2">
              {type}
              {' | '}
              {date}
            </p>
            <p className="pb-2">{shortDescription}</p>
          </a>
        </Link>
        <div className="flex flex-wrap">
          {tags.map((tag: string, index) => (
            <span className="text-yellow-600 pr-3 mb-2" key={index}>
              #{tag}{' '}
            </span>
          ))}
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
      </div>
    </div>
  );
};

export { PortfolioItem };
