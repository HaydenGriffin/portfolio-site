export type EducationItemType = {
  establishment: string;
  studied: string;
  obtained: string;
  location: string;
  startDate: string;
  endDate: string;
};

export type PortfolioItemType = {
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

export type WorkItemType = {
  companyName: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  keyInformation: string[];
  technologies: WorkItemTechnologyType[];
};

export type WorkItemTechnologyType = {
  name: string;
  link: string;
};
