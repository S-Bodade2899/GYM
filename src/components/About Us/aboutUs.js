import React from "react";
import styles from "./aboutUs.module.css";

function AboutUs() {
  return (
    <>
      <div className={styles.heading}>
        <h1>About Us</h1>
      </div>

      <div className={styles.img}>
        <img src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>

      <div className={styles.text}>
        <h2>Who we are</h2>
        <span>we will give you strength and Health</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button>Join Now</button>
      </div>

      <div className={styles.cards}>
        <div className={styles.card1}>
          <h1>1K+ Members</h1>
        </div>

        <div className={styles.card2}>
          <h1>50+ Trainees</h1>
        </div>
      </div>

      <div className={styles.story}>
        <h1>Our Story</h1>
        <p>
          At Gym and Fitness, we believe that fitness and wellbeing are the
          cornerstones of a full and vibrant life. Established in 2002, we began
          our journey as a family-owned business dedicated to providing
          exceptional gym equipment at affordable prices. But, we dreamed bigger
          than just being an ordinary fitness equipment supplier; we aspired to
          lead the industry.
          <br />
          <br />
          Two decades later, we are proud to have transformed Gym and Fitness
          into one of Australia's premier online retailers of fitness equipment.
          We've moved beyond just supplying gear – we've become advocates for
          fitness, wellbeing and life enrichment. Our commitment to excellence
          is reflected not only in the quality equipment we provide but also in
          the lives we've improved.
          <br />
          <br />
          Our real success lies in the thousands of customers we've empowered to
          live longer, more joyful, and healthier lives. We're more than just a
          fitness company – we're your partners in health, your cheerleaders on
          the sideline, motivating you to reach your personal fitness goals.
          Embrace the fitness journey with us and see how it transforms your
          world. Join us in our mission to improve lives through fitness and
          wellness, because at Gym and Fitness, your health is our passion.
        </p>
      </div>
    </>
  );
}

export default AboutUs;
