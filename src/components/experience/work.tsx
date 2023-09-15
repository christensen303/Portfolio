import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { CardHeader } from '@mui/material';
import * as workClasses from './work.module.less';

interface WorkProps {
  title: string;
  bulletPoints: string[];
  timePeriod: string;
  location: string; 
  logo: JSX.Element;
}

const Work: React.FC<WorkProps> = ({ title, bulletPoints, timePeriod, location, logo }) => {
  const workList = bulletPoints.map(pt => {
    return <li key={pt}>{pt}</li>;
  });

  return (
    <Card className={workClasses.card}>
      <CardHeader
        className={workClasses.cardHeader}
        title={<p className={workClasses.cardTitle}>{title}</p>}
        avatar={logo}
      />
      <CardContent className={workClasses.cardContent}>
        <hr />
        <ul>{workList}</ul>
      </CardContent>
      <CardActions>
        {timePeriod} | {location}
      </CardActions>
    </Card>
  );
};

export default Work;
