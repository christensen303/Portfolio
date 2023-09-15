import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ExperienceIcon from '@mui/icons-material/TrendingUp';
import MailIcon from '@mui/icons-material/MailOutline';
import SkillsIcon from '@mui/icons-material/Equalizer';
import EducationIcon from '@mui/icons-material/School';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import { ListItemText, ListItemIcon } from '@mui/material';
import * as navClasses from './nav.module.less';

interface NavProps {
    isDesktop: boolean;
    scrolling: (tag: string) => void;
}

const Nav: React.FC<NavProps> = ({ isDesktop, scrolling }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const smallNav = (
    <nav className={navClasses.smallNav}>
      <MenuIcon
        fontSize="large"
        className={navClasses.menuIcon}
        onClick={() => setDrawerOpen(!drawerOpen)}
      />
      <div className={navClasses.navTitleSm}>
        <p className={navClasses.nameTitleSm}>Casey Christensen</p>
        <p className={navClasses.position}>Software Engineer</p>
      </div>
    </nav>
  );

  return (
    <>
      {!isDesktop ? smallNav : null}
      <Drawer
        variant={isDesktop ? 'permanent' : 'temporary'}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onClick={() => setDrawerOpen(false)}
      >
        <div
          className={navClasses.navTitle}
          onClick={() => {
            scrolling('intro');
            setSelectedItem('');
          }}
        >
          <p className={navClasses.nameTitle}>Casey Christensen</p>
          <p>Software Engineer</p>
        </div>
        <Divider />
        <div className={navClasses.drawerDiv}>
          <List>
            <ListItemButton
              onClick={() => {
                scrolling('about');
                setSelectedItem('about');
              }}
              style={selectedItem === 'about' ? { borderLeft: '4px solid #008073' } : undefined}
            >
              <ListItemIcon>
                <PersonIcon className={navClasses.personIcon} />
              </ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                scrolling('experience');
                setSelectedItem('experience');
              }}
              style={selectedItem === 'experience'
                ? { borderLeft: '4px solid #00BBD3' }
                : undefined}
            >
              <ListItemIcon>
                <ExperienceIcon className={navClasses.experienceIcon} />
              </ListItemIcon>
              <ListItemText>Experience</ListItemText>
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                scrolling('skills');
                setSelectedItem('skills');
              }}
              style={selectedItem === 'skills'
                ? { borderLeft: '4px solid #3F51B5' }
                : undefined}
            >
              <ListItemIcon>
                <SkillsIcon className={navClasses.skillsIcon} />
              </ListItemIcon>
              <ListItemText>Skills</ListItemText>
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                scrolling('education');
                setSelectedItem('education');
              }}
              style={selectedItem === 'education'
                ? { borderLeft: '4px solid #9C27B0' }
                : undefined}
            >
              <ListItemIcon>
                <EducationIcon className={navClasses.educationIcon} />
              </ListItemIcon>
              <ListItemText>Education</ListItemText>
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                scrolling('contact');
                setSelectedItem('contact');
              }}
              style={selectedItem === 'contact'
                ? { borderLeft: '4px solid #F44336' }
                : undefined}
            >
              <ListItemIcon>
                <MailIcon className={navClasses.contactIcon} />
              </ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemButton>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Nav;