import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Location from '~/public/svg/location.svg';
import { GetStaticProps } from 'next';
import { retrieveJsonContent } from '~/common/utils';
import { Section } from '~/components/section';
import { WorkItem } from '~/components/work-item';
import { EducationItemType, WorkItemType } from '~/common/types';
import { EducationItem } from '~/components/education-item';

export default function About({
  workItems,
  educationItems,
}: {
  workItems: WorkItemType[];
  educationItems: EducationItemType[];
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section id="contact" paddingYOverride="pt-32 pb-10">
        <div className="flex justify-center flex-wrap lg:-mx-8 xl:-mx-12">
          <div className="text-center lg:px-8 xl:px-12 lg:w-2/6">
            <img
              className="profile-image rounded-full block m-auto mb-8"
              src="/images/profile.jpg"
              alt="Image of me"
            ></img>
          </div>
          <div className="pb-10 lg:px-8 xl:px-12 lg:w-4/6">
            <h2 className="text-4xl mb-5">
              Send me an email, or follow me on social media.
            </h2>
            <p className="text-justify text-2xl mb-5">
              If you're interested in working with me, or just want to say
              hello, you can contact me at the following addresses:
            </p>
            <p className="text-justify text-2xl">
              <b>Email:</b> haydenjamesgriffin@gmail.com
            </p>
            <p className="text-justify text-2xl mb-5">
              <b>Phone:</b> +44 7963508259
            </p>
            <p className="text-justify text-2xl mb-2">
              Or get in touch on my socials via{' '}
              <b>
                <a href="https://www.linkedin.com/in/hayden-griffin-65b66612b/">
                  LinkedIn
                </a>
              </b>
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const workFileContent = retrieveJsonContent('work.json');
  let workItems: WorkItemType[] = JSON.parse(workFileContent);

  const educationFileContent = retrieveJsonContent('education.json');
  let educationItems: EducationItemType[] = JSON.parse(educationFileContent);

  return {
    props: {
      workItems,
      educationItems,
    },
  };
};
