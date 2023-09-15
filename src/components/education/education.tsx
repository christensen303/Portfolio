import React from 'react';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import * as educationClasses from './education.module.less';
import { StaticImage } from 'gatsby-plugin-image';

const Education = () => {
  const byuiTitle = (
    <a className={educationClasses.eduTitle} href="https://byui.edu">
      BYU-Idaho
    </a>
  );

  const scrumTitle = (
    <a className={educationClasses.eduTitle} href="https://scrumalliance.org/">
      Scrum Master
    </a>
  );

  const spanishTitle = (
    <a className={educationClasses.eduTitle} href="https://www.uvu.edu/">
      Spanish
    </a>
  );

  return (
    <>
      <div className={educationClasses.education}>
        <h1>Education</h1>
      </div>
      <div className={educationClasses.myEducation}>
        <Card className={`${educationClasses.eduCard} ${educationClasses.giveMeSpace}`}>
          <CardHeader
            title={byuiTitle}
            subheader={<p className={educationClasses.eduSubHeader}>2013-2016</p>}
            avatar={
              <a href="https://byui.edu">
                <StaticImage className={educationClasses.eduLogo} src='../../images/byui_logo.png' alt="BYU-I"/>
              </a>
            }
          ></CardHeader>
          <CardContent>
            <ul>
              <li>B.S. in Computer Engineering</li>
              <li>
                Research and Creative Works Conference – Made a checkers playing
                robot.
              </li>
              <li>IEEE</li>
            </ul>
          </CardContent>
        </Card>
        <Card className={`${educationClasses.eduCard} ${educationClasses.giveMeSpace}`}>
          <CardHeader
            title={scrumTitle}
            subheader={<p className={educationClasses.eduSubHeader}>2017</p>}
            avatar={
              <a href="https://scrumalliance.org/">
                <StaticImage className={educationClasses.eduLogo} src='../../images/csm.png' alt="scrum alliance"/>
              </a>
            }
          ></CardHeader>
          <CardContent>
            <ul>
              <li>Certified Scrum Master by the Scrum Alliance</li>
            </ul>
          </CardContent>
        </Card>
        <Card className={educationClasses.eduCard}>
          <CardHeader
            title={spanishTitle}
            subheader={<p className={educationClasses.eduSubHeader}>2009-2012</p>}
            avatar={
              <a href="https://uvu.edu">
                <StaticImage className={educationClasses.eduLogo} src='../../images/uvu.png' alt="UVU"/>
              </a>
            }
          ></CardHeader>
          <CardContent>
            <ul>
              <li>
                I am fluent in Spanish after two and half years of studying and
                speaking Spanish with people from Central and South America.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Education;
