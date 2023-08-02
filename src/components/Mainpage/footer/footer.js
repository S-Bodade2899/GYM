import React from 'react';
import styles from './footer.module.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.footercol}>
                <h4>Healthy Living</h4>
                <ul>
                    <li>Nutrition Tips</li>
                    <li>Fitness Advice</li>
                    <li>Stress Reduction</li>
                    <li>Disclaimer</li>
                </ul>
            </div>
            <div className={styles.footercol}>
                <h4>Services</h4>
                <ul>
                    <li>Functional Training</li>
                    <li>Group Classes</li>
                    <li>Strength Training</li>
                    <li>Functional Training</li>
                    <li>Fitness Assessments</li>
                </ul>
            </div>
            <div className={styles.footercol}>
                <h4>Programmes</h4>
                <ul>
                    <li>Group Fitness Classes</li>
                    <li>Personal Training</li>
                    <li>Weight Loss Programs</li>
                    <li>Senior Fitness</li>
                </ul>
            </div>
            <div className={styles.footercol}>
                <h4>Follow Us</h4>
                <div className={styles.sociallinks}>
                <a><FacebookRoundedIcon/></a>
                <a><InstagramIcon/></a>
                <a><TwitterIcon/></a>
                <a><LinkedInIcon/></a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
