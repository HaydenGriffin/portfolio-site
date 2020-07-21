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
  <div className="flex justify-center pb-10 p-10">
    <div className="flex-1 max-w-1600">
      <div
        className={
          reversed
            ? `flex flex-wrap flex-row-reverse -mx-2`
            : `flex flex-wrap -mx-2`
        }
      >
        <div className="w-full lg:w-1/2 px-2">
          <div className="square">
            <div className="content">{children}</div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-2">
          <div className={`square ` + colour}>
            <div className="content">Lol</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex flex-grow justify-center homepage-background mb-6">
        <div className="container text-center p-24 sm:p-32 lg:p-40 lg:p-48 xl:p-56 mb-20">
          <h1 className="text-3xl leading-tight sm:text-4xl lg:text-5xl lg:text-6xl">
            Hello, my name is Hayden. I'm a full stack developer.
          </h1>
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
