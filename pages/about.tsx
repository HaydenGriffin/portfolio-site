import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Location from '~/public/svg/location.svg';
import { GetStaticProps } from 'next';
import retrieveJsonContent from '~/util/json-retrieve';
import { Section } from '~/components/section';
import { WorkItem } from '~/components/work-item';
import { WorkItemInterface } from '~/@types/WorkHistory';
import { EducationItemInterface } from '~/@types/Education';
import { EducationItem } from '~/components/education-item';

export default function About({
  workItems,
  educationItems,
}: {
  workItems: WorkItemInterface[];
  educationItems: EducationItemInterface[];
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
            <p className="text-justify text-xl lg:text-2xl">
              Hello, my name is Hayden and I am a full stack developer based in
              Dorset (UK). Previously I worked at x, y and z. I now work
              remotely on full stack projects. Check out some of my work here
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              viverra nisi orci, quis porttitor justo porttitor nec. Aliquam
              pharetra gravida ligula, eu hendrerit nibh faucibus ut. Quisque
              elementum sapien erat, et pharetra nulla tristique et. Praesent
              nec eros metus. Ut sagittis leo elementum leo placerat rhoncus.
              Vivamus faucibus dignissim mauris, et vehicula dui porttitor a.
              Aliquam ultricies sit amet mi et viverra.
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
  let workItems: WorkItemInterface[] = JSON.parse(workFileContent);

  const educationFileContent = retrieveJsonContent('education.json');
  let educationItems: EducationItemInterface[] = JSON.parse(
    educationFileContent
  );

  return {
    props: {
      workItems,
      educationItems,
    },
  };
};
