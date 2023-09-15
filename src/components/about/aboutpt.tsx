import React from 'react';
import * as aboutPtClasses from './aboutpt.module.less';

export interface AboutPtProps {
    image: JSX.Element;
    title: string;
    notes: string;
}

const AboutPt: React.FC<AboutPtProps> = ({image, title, notes}) => {
  return (
    <div className={aboutPtClasses.skill}>
      <div className={aboutPtClasses.skillContainer}>
        <div>
          {image}
        </div>
        <div className={aboutPtClasses.skillTitle}>{title}</div>
      </div>
      <div className={aboutPtClasses.skillNotes}>{notes}</div>
    </div>
  );
};

export default AboutPt;
