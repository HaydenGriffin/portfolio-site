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

export default function About({
  workHistoryItems,
}: {
  workHistoryItems: WorkHistoryItem[];
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
                remotely on full stack projects. Check out some of my work here
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent viverra nisi orci, quis porttitor justo porttitor nec.
                Aliquam pharetra gravida ligula, eu hendrerit nibh faucibus ut.
                Quisque elementum sapien erat, et pharetra nulla tristique et.
                Praesent nec eros metus. Ut sagittis leo elementum leo placerat
                rhoncus. Vivamus faucibus dignissim mauris, et vehicula dui
                porttitor a. Aliquam ultricies sit amet mi et viverra.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap p-2">
            <div className="w-full lg:w-2/6 px-2">
              <h2 className="text-3xl py-2">Work Experience</h2>
            </div>
          </div>
          {workHistoryItems.map((workHistoryItem: WorkHistoryItem, index) => (
            <div className="flex flex-wrap p-2">
              <div className="w-full lg:w-2/6 px-2">
                <h3 className="text-2xl">{workHistoryItem.companyName}</h3>
                <p className="text-lg pb-1">{workHistoryItem.location}</p>
                <p>
                  {workHistoryItem.startDate} - {workHistoryItem.endDate}
                </p>
                <p>{workHistoryItem.role}</p>
                <div className="pb-2">
                  {workHistoryItem.technologies.map(
                    (technology: Technology, index) => (
                      <span className="text-yellow-600 pr-3 mb-2" key={index}>
                        <a href={technology.link}>#{technology.name}</a>{' '}
                      </span>
                    )
                  )}
                </div>
                <button
                  onClick={() => toggleShowInformation(index)}
                  className="w-32 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-10"
                >
                  Read More
                </button>
              </div>
              <div className="w-full lg:w-4/6 px-2">
                {showInformation[index] ? (
                  <Fragment>
                    <h3 className="text-2xl">{workHistoryItem.role}</h3>
                    <p className="text-lg">
                      {workHistoryItem.companyName} - {workHistoryItem.location}
                    </p>
                    <div key={index}>
                      <ul>
                        {workHistoryItem.keyInformation.map(
                          (information: string, index) => (
                            <li>{information}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </Fragment>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const fileContent = retrieveJsonContent('work.json');
  let workHistoryItems: WorkHistoryItem[] = JSON.parse(fileContent);

  return {
    props: {
      workHistoryItems,
    },
  };
};
