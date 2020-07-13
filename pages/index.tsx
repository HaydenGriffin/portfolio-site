import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { PropsWithChildren } from 'react';

interface HomeContentSectionItemProps {
  colour: string;
  reversed: boolean;
}

const HomeContentSectionItem: React.FC<PropsWithChildren<
  HomeContentSectionItemProps
>> = ({
  colour,
  reversed,
  children,
}: PropsWithChildren<HomeContentSectionItemProps>) => (
  <div
    className={reversed ? `flex flex-wrap flex-row-reverse` : `flex flex-wrap`}
  >
    <div className="w-full md:w-1/2">
      <div className="m-8 py-48 md:py-56">{children}</div>
    </div>
    <div className="w-full md:w-1/2">
      <div className={`m-8 py-48 md:py-56 ` + colour}>Lol</div>
    </div>
  </div>
);

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex flex-grow justify-center items-center homepage-background mb-6">
        <div className="container text-center p-32 sm:p-40 md:p-48 lg:p-56 mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Hello, my name is Hayden. I'm a full stack developer.
          </h2>
        </div>
      </div>
      <HomeContentSectionItem colour="bg-red-600" reversed={false}>
        This is the content for item 1
      </HomeContentSectionItem>
      <HomeContentSectionItem colour="bg-blue-600" reversed={true}>
        This is the content for item 2
      </HomeContentSectionItem>
    </Layout>
  );
}
