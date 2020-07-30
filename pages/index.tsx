import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { InternalButton, ExternalButton } from '../components/buttons';
import { Section } from '../components/section';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section
        id="homepage"
        extraClasses="homepage-background min-h-screen"
        paddingYOverride="md:py-32 lg:py-40"
      >
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
      </Section>
    </Layout>
  );
}
