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
                    <li><a></a>Nutrition Tips</li>
                    <li><a></a>Fitness Advice</li>
                    <li><a></a>Stress Reduction</li>
                    <li><a></a>Disclaimer</li>
                </ul>
            </div>
            <div className={styles.footercol}>
                <h4>Services</h4>
                <ul>
                    <li><a></a>Functional Training</li>
                    <li><a></a>Group Classes</li>
                    <li><a></a>Strength Training</li>
                    <li><a></a>Functional Training</li>
                    <li><a></a>Fitness Assessments</li>
                </ul>
            </div>
            <div className={styles.footercol}>
                <h4>Programmes</h4>
                <ul>
                    <li><a></a>Group Fitness Classes</li>
                    <li><a></a>Personal Training</li>
                    <li><a></a>Weight Loss Programs</li>
                    <li><a></a>Senior Fitness</li>
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
