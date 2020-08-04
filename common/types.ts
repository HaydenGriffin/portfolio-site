export type EducationItemProps = {
  establishment: string;
  studied: string;
  obtained: string;
  location: string;
  startDate: string;
  endDate: string;
};

export type PortfolioItemProps = {
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
};
