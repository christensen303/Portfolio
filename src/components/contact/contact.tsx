import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as contactClasses from './contact.module.less';

const Contact: React.FC = () => {
  return (
    <div className={contactClasses.contactRoot}>
      <div className={contactClasses.contact}>
        <h1>Contact</h1>
      </div>
      <div className={contactClasses.contactBody}>
        <div className={contactClasses.contactBox}>
          <a
            href="mailto:christensen303@gmail.com"
            className={`${contactClasses.contactBtn} ${contactClasses.emailLink}`}
          >
            <EmailIcon className={contactClasses.contactIcon} />
          </a>
          <a href="mailto:christensen303@gmail.com" className={contactClasses.contactDetails}>
            christensen303@gmail.com
          </a>
        </div>
        <div className={contactClasses.contactBox}>
          <a
            href="https://github.com/kcrey25"
            className={`${contactClasses.contactBtn} ${contactClasses.githubLink}`}
          >
            <GitHubIcon className={contactClasses.contactIcon} />
          </a>
          <a href="https://github.com/kcrey25" className={contactClasses.contactDetails}>
            github.com/kcrey25
          </a>
        </div>
        <div className={contactClasses.contactBox}>
          <a
            href="https://www.linkedin.com/in/christensencasey/"
            className={`${contactClasses.contactBtn} ${contactClasses.linkedinLink}`}
          >
            <LinkedInIcon className={contactClasses.contactIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/christensencasey/"
            className={contactClasses.contactDetails}
          >
            linkedin.com/in/christensencasey
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
