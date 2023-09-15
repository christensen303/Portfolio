import React from 'react';

import AboutPt, { AboutPtProps } from './aboutpt';
import * as aboutClasses from './about.module.less';
import { StaticImage } from 'gatsby-plugin-image';

const aboutPts: AboutPtProps[] = [
  {
    title: 'Development',
    image: <StaticImage className={aboutClasses.skillImg} src='../../images/Software.png' alt="Development skill image" />,
    notes:
      "I have experience working on software for F-16's, mobile apps, desktop apps, and websites."
  },
  {
    title: 'Responsive Design',
    image: <StaticImage className={aboutClasses.skillImg} src='../../images/responsive.png' alt="Responsive Design skill image" />,
    notes:
      'Responsive design is key for a great user experience. I can make a great experience on any device.'
  },
  {
    title: 'Communication',
    image: <StaticImage className={aboutClasses.skillImg} src='../../images/communication.png' alt="Communication skill image" />,
    notes: 'I believe that communication will ensure the best results.'
  }
];

const About: React.FC = () => {
  var myPoints = aboutPts.map((pt, i) => {
    return <AboutPt key={i} {...pt} />;
  });
  return (
    <>
      <div className={aboutClasses.about}>
        <h1>About</h1>
      </div>
      <div className={aboutClasses.aboutBody}>
        <section>
          <div className={aboutClasses.aboutLeft}>
            Adaptive full-stack developer with a passion for solving problems,
            creating the best user experience, and continuous learning.
          </div>
          <div className={aboutClasses.aboutMe}>
            <p>
              I love creating through software development. It has been my
              passion for the last decade! Although I do spend a lot of time at
              work, I am more than just a developer.
            </p>
            <p style={{ marginTop: '15px' }}>
              I have a gorgeous wife and 4 crazy boys. I absolutely love
              spending time with them. We spend most of our time outdoors, from
              playing in our backyard to amazing hikes up the canyon. I also
              snowboard and play baseball as much as I can.
            </p>
          </div>
        </section>
        <div className={aboutClasses.mySkills}>{myPoints}</div>
      </div>
    </>
  );
};

export default About;
