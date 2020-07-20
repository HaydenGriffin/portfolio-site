import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { PropsWithChildren } from 'react';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex justify-center p-10">
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
                <span className="text-xl">Bournemouth, Dorset (UK)</span>
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
        </div>
      </div>
    </Layout>
  );
}
