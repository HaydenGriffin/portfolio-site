import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import moment from 'moment';
import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import { Url } from 'url';

interface WorkItem {
  companyName: string;
  role: string;
  location: string;
  startDate: Date;
  endDate: Date;
  keyInformation: string[];
  technologies: TechnologyItem[];
}

interface TechnologyItem {
  name: string;
  link: Url;
}

export default function About({ workHistory }: { workHistory: WorkItem[] }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {workHistory.map((workItem: WorkItem) => (
        <li>
          <h3>{workItem.companyName}</h3>
          <p>{workItem.role}</p>
          <p>{moment(workItem.startDate, 'YYYY-MM-DD').format('MMM YYYY')}</p>
          {workItem.keyInformation.map((information: string) => (
            <p>{information}</p>
          ))}
        </li>
      ))}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const postsDirectory = path.join(process.cwd(), 'public/content');
  const filePath = path.join(postsDirectory, 'work.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  let workHistory: WorkItem[] = JSON.parse(fileContent);

  return {
    props: {
      workHistory,
    },
  };
};
