import React from 'react';
import * as skillsClasses from './skills.module.less';
import { StaticImage } from 'gatsby-plugin-image';

const imgAndroid = <StaticImage className={skillsClasses.skillImg} alt='Android Icon' src='../../images/skills/android.png' />
const imgAws = <StaticImage className={skillsClasses.skillImg} alt='Android Icon' src='../../images/skills/aws.png' />
const imgCSharp = <StaticImage className={skillsClasses.skillImg} alt='C Sharp Icon' src='../../images/skills/csharp.png' />
const imgCss = <StaticImage className={skillsClasses.skillImg} alt='CSS3 Icon' src='../../images/skills/css3.png' />
const imgGit = <StaticImage className={skillsClasses.skillImg} alt='Git Icon' src='../../images/skills/git.png' />
const imgGitHub = <StaticImage className={skillsClasses.skillImg} alt='GitHub Icon' src='../../images/skills/github.png' />
const imgHtml = <StaticImage className={skillsClasses.skillImg} alt='HTML5 Icon' src='../../images/skills/html5.png' />
const imgJs = <StaticImage className={skillsClasses.skillImg} alt='JavaScript Icon' src='../../images/skills/javascript.png' />
const imgJenkins = <StaticImage className={skillsClasses.skillImg} alt='Jenkins Icon' src='../../images/skills/jenkins.png' />
const imgTs = <StaticImage className={skillsClasses.skillImg} alt='TypeScript Icon' src='../../images/skills/typescript.png' />
const imgMongoDb = <StaticImage className={skillsClasses.skillImg} alt='Mongo DB Icon' src='../../images/skills/mongodb.png' />
const imgNodeJs = <StaticImage className={skillsClasses.skillImg} alt='Node JS Icon' src='../../images/skills/nodejs.png' />
const imgReact = <StaticImage className={skillsClasses.skillImg} alt='React Icon' src='../../images/skills/react.png' />
const imgServerless = <StaticImage className={skillsClasses.skillImg} alt='Serverless Icon' src='../../images/skills/serverless.png' />
const imgVs = <StaticImage className={skillsClasses.skillImg} alt='Visual Studio Icon' src='../../images/skills/visualstudio.png' />
const imgXamarin = <StaticImage className={skillsClasses.skillImg} alt='Xamarin Icon' src='../../images/skills/xamarin.png' />

interface ISkills {
  name: string;
  image: JSX.Element;
}

const skills: ISkills[] = [
  { name: 'Android', image: imgAndroid },
  { name: 'AWS', image: imgAws },
  { name: 'C#', image: imgCSharp },
  { name: 'CSS3', image: imgCss },
  { name: 'Git', image: imgGit },
  { name: 'GitHub', image: imgGitHub },
  { name: 'HTML5', image: imgHtml },
  { name: 'JavaScript', image: imgJs },
  { name: 'Jenkins', image: imgJenkins },
  { name: 'TypeScript', image: imgTs },
  { name: 'MongoDB', image: imgMongoDb },
  { name: 'NodeJS', image: imgNodeJs },
  { name: 'React', image: imgReact },
  { name: 'Serverless', image: imgServerless },
  { name: 'Visual Studio', image: imgVs },
  { name: 'Xamarin', image: imgXamarin }
];

const Skills: React.FC = () => {
  const sortedSkills = React.useMemo(() => skills.sort((a,b) => {
    return (a.name.toLowerCase() > b.name.toLowerCase())? 1:-1;
  }), []);
  const mySkills = React.useMemo(() => sortedSkills.map(skill => {
    return (
      <div key={skill.name} className={skillsClasses.singleSkill}>
        <div className={skillsClasses.imgDiv}>
          {skill.image}
        </div>
        <p className={skillsClasses.skillName}>{skill.name}</p>
      </div>
    );
  }), []);

  return (
    <>
      <div className={skillsClasses.skills}>
        <h1>Skills</h1>
      </div>
      <section className={skillsClasses.skillsBody}>{mySkills}</section>
    </>
  );
};

export default Skills;
