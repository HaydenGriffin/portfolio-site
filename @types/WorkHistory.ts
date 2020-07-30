export interface WorkItemInterface {
  companyName: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  keyInformation: string[];
  technologies: TechnologyInterface[];
}

export interface TechnologyInterface {
  name: string;
  link: string;
}
