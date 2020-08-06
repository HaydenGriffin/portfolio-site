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
      <Section id="about" paddingYOverride="pt-32 pb-10">
        <div className="flex justify-center flex-wrap -mx-2">
          <div className="text-center px-2 lg:w-2/6">
            <div className="flex flex-col mb-10">
              <img
                className="profile-image rounded-full block m-auto mb-8"
                src="/images/profile.jpg"
                alt="Image of me"
              ></img>
              <div className="flex flex-row justify-center">
                <Location className="mr-1" />
                <p className="text-xl">Bournemouth, Dorset (UK)</p>
              </div>
            </div>
          </div>
          <div className="px-2 pb-10 lg:w-4/6">
            <p className="text-justify text-xl pb-6 lg:text-2xl">
              Hello, my name is Hayden and I am a full stack developer based
              near Bournemouth (UK). I have recently graduated from University
              of Surrey with a degree in Computer Science (with placement year).
              I have experience with developing and designing software including
              web and mobile applications.
            </p>
            <p className="text-justify text-xl lg:text-2xl">
              My hobbies include gaming, weight training, travelling and of
              course coding! Feel free to check out my projects, and connect
              with me on my social platforms. If you'd like to get to know me,
              or have a potential software project that you'd like some help
              with, don't hesitate to reach out.
            </p>
          </div>
        </div>
      </Section>
      <Section id="work" paddingYOverride="py-18">
        <h2 className="text-3xl py-6 px-4">Work Experience</h2>
        {workItems.map((workItem, index) => (
          <WorkItem key={index} index={index} workItem={workItem} />
        ))}
      </Section>
      <Section id="education" paddingYOverride="py-18">
        <h2 className="text-3xl py-6 px-4">Education History</h2>
        {educationItems.map((educationItem, index) => (
          <EducationItem
            key={index}
            index={index}
            educationItem={educationItem}
          />
        ))}
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
