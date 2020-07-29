import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Location from '~/public/svg/location.svg';
import { GetStaticProps } from 'next';
import retrieveJsonContent from '~/util/json-retrieve';
import React, { Fragment } from 'react';

interface WorkHistoryItem {
  companyName: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  keyInformation: string[];
  technologies: Technology[];
}

interface Technology {
  name: string;
  link: string;
}

interface EducationItem {
  establishment: string;
  studied: string;
  obtained: string;
  location: string;
  startDate: string;
  endDate: string;
}

export default function About({
  workHistoryItems,
  educationItems,
}: {
  workHistoryItems: WorkHistoryItem[];
  educationItems: EducationItem[];
}) {
  const [showInformation, setShownInformation] = React.useState<Array<boolean>>(
    []
  );

  const toggleShowInformation = (id: number) => {
    setShownInformation((prevShownInformation: boolean[]) => ({
      ...prevShownInformation,
      [id]: !prevShownInformation[id],
    }));
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex justify-center p-8">
        <div className="flex-1 max-w-1600">
          <div className="border-b-2">
            <div className="flex justify-center flex-wrap -mx-2">
              <div className="w-full lg:w-2/6 text-center px-2">
                <div className="flex flex-col mb-10">
                  <div className="pb-6">
                    <img
                      className="profile-image rounded-full block m-auto"
                      src="/images/profile.jpg"
                      alt="Image of me"
                    ></img>
                  </div>
                  <div className="flex flex-row justify-center">
                    <Location className="mr-1" />
                    <p className="text-xl">Bournemouth, Dorset (UK)</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-4/6 px-2">
                <p className="text-justify text-xl lg:text-2xl">
                  Hello, my name is Hayden and I am a full stack developer based
                  in Dorset (UK). Previously I worked at x, y and z. I now work
                  remotely on full stack projects. Check out some of my work
                  here Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent viverra nisi orci, quis porttitor justo porttitor
                  nec. Aliquam pharetra gravida ligula, eu hendrerit nibh
                  faucibus ut. Quisque elementum sapien erat, et pharetra nulla
                  tristique et. Praesent nec eros metus. Ut sagittis leo
                  elementum leo placerat rhoncus. Vivamus faucibus dignissim
                  mauris, et vehicula dui porttitor a. Aliquam ultricies sit
                  amet mi et viverra.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap p-2">
            <div className="w-full lg:w-2/6 px-2">
              <h2 className="text-3xl py-6">Work Experience</h2>
            </div>
          </div>
          <div className="border-b-2">
            {workHistoryItems.map(
              (
                {
                  companyName,
                  role,
                  location,
                  startDate,
                  endDate,
                  keyInformation,
                  technologies,
                }: WorkHistoryItem,
                index
              ) => (
                <div key={index} className="flex flex-wrap p-2">
                  <div className="w-full lg:w-2/6 px-2">
                    <h3 className="text-2xl">{companyName}</h3>
                    <p className="text-lg pb-1">{location}</p>
                    <p>
                      {startDate} - {endDate}
                    </p>
                    <p>{role}</p>
                    <div className="pb-2">
                      {technologies.map(({ name, link }: Technology, index) => (
                        <span className="text-yellow-600 pr-3 mb-2" key={index}>
                          <a href={link}>#{name}</a>{' '}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => toggleShowInformation(index)}
                      className="button mt-1 mb-10"
                    >
                      {showInformation[index] ? (
                        <Fragment>Show Less</Fragment>
                      ) : (
                        <Fragment>Show More</Fragment>
                      )}
                    </button>
                  </div>
                  <div className="w-full lg:w-4/6 px-2">
                    {showInformation[index] ? (
                      <Fragment>
                        <div className="pb-10 lg:pb-0">
                          <h3 className="text-2xl">{role}</h3>
                          <p className="text-lg">
                            {companyName}{' '}
                            {location ? (
                              <Fragment>- {location}</Fragment>
                            ) : null}
                          </p>
                          <div key={index}>
                            <ul className="list-disc">
                              {keyInformation.map(
                                (information: string, index) => (
                                  <li key={index}>{information}</li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </Fragment>
                    ) : null}
                  </div>
                </div>
              )
            )}
          </div>
          <div className="flex flex-wrap p-2">
            <div className="w-full lg:w-2/6 px-2">
              <h2 className="text-3xl py-6">Education History</h2>
            </div>
          </div>
          {educationItems.map(
            (
              {
                establishment,
                studied,
                obtained,
                location,
                startDate,
                endDate,
              }: EducationItem,
              index
            ) => (
              <div key={index} className="flex flex-wrap p-2">
                <div className="w-full lg:w-2/6 px-2">
                  <h3 className="text-2xl">{establishment}</h3>
                  <p className="text-lg pb-1">{location}</p>
                  <p>
                    {startDate} - {endDate}
                  </p>
                  <p className="mb-2">{studied}</p>
                  <button
                    onClick={() => toggleShowInformation(index)}
                    className="button mt-1 mb-10"
                  >
                    {showInformation[index] ? (
                      <Fragment>Show Less</Fragment>
                    ) : (
                      <Fragment>Show More</Fragment>
                    )}
                  </button>
                </div>
                <div className="w-full lg:w-4/6 px-2">
                  {showInformation[index] ? (
                    <Fragment>
                      <div className="pb-10 lg:pb-0">
                        <h3 className="text-2xl">{studied}</h3>
                        <p className="text-lg">
                          {establishment} - {location}
                        </p>
                        <p className="text-xl">Obtained {obtained}</p>
                      </div>
                    </Fragment>
                  ) : null}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const workFileContent = retrieveJsonContent('work.json');
  let workHistoryItems: WorkHistoryItem[] = JSON.parse(workFileContent);

  const educationFileContent = retrieveJsonContent('education.json');
  let educationItems: EducationItem[] = JSON.parse(educationFileContent);

  return {
    props: {
      workHistoryItems,
      educationItems,
    },
  };
};
