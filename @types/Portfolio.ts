export interface PortfolioItemInterface {
  id: string;
  project: string;
  type: string;
  date: string;
  shortDescription: string;
  longDescription: string[];
  tags: string[];
  github: string;
  link: string;
  imageLink: string;
  altText: string;
}
