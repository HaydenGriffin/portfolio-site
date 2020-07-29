import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { InternalButton, ExternalButton } from '../components/button';
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
      <div className="flex justify-center text-center homepage-background">
        <div className="flex flex-col max-w-1600">
          <div className="flex-1 text-center px-16 pt-40 pb-20 mb-10 sm:px-24 md:px-32 lg:px-40 xl:px-48">
            <h1 className="text-3xl leading-tight sm:text-4xl lg:text-6xl pb-8">
              Hello, my name is Hayden. I'm a full stack developer.
            </h1>
            <div className="flex flex-wrap justify-center">
              <div className="m-2">
                <InternalButton href="/about">Read More</InternalButton>
              </div>
              <div className="m-2">
                <ExternalButton href="/content/cv.pdf">View CV</ExternalButton>
              </div>
            </div>
          </div>
          <div className="justify-center text-center mb-10">
            Social links here
          </div>
        </div>
      </div>
    </Layout>
  );
}
