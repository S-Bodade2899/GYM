import React from "react";
import styles from "./Blogs.module.css";
import SearchIcon from "@mui/icons-material/Search";

function Blogs() {
  return (
    <>
      <div className={styles.heading}>
        <h1>Blogs and Articles</h1>
      </div>

      <div className={styles.content}>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <input
        type="search"
        placeholder="Search here..."
        className={styles.searchbar}
      />
      <button className={styles.srchbtn}>
        <SearchIcon />
      </button>

      <div className={styles.artHeadng}><h1>Popular Articles</h1></div>

      <div className={styles.blog1}>
      <img src="https://t3.ftcdn.net/jpg/01/79/53/68/240_F_179536830_p65hwhx89hjEVKtMhWumYpdbwaDGRkC7.jpg" alt="womenFitness" />
      <div className={styles.blogcontent}>
      <h2>Strength Training for women: 7 Things you should know first</h2>
      <p>So you’re a woman who wants to start strength training? Well you’ve come to the right place! 
      We help women just like you grow strong, and today we’ll get you started on your strength training journey.</p>
      <ul>
      <li>Should women lift the weights?</li>
      <li>Is strength training is different for women?</li>
      <li>How much weight should women lift?</li>
    </ul>
      <a href="https://www.nerdfitness.com/blog/7-strength-training-myths-every-woman-should-know/"><button>Read more..</button></a>
      </div>
      </div>

      <div className={styles.blog2}>
      <div className={styles.blogcontent2}>
      <h2>The Beginner Bodyweight Workout: 20-Minute Routine To Do At Home or Anywhere!</h2>
      <p>So you want to lose weight and get in shape, but don’t want to leave your house? Well, as your fitness Yoda, I will teach you a great bodyweight workout routine that you can do ANYWHERE: In your living room, at a park, or in a galaxy far, far away… I’m going to take you through a basic home workout today that can be completed anywhere – in your house, apartment, out at a park, in your basement, on the moon, wherever </p>
     
      <a href="https://www.nerdfitness.com/blog/beginner-body-weight-workout-burn-fat-build-muscle/"><button>Read more..</button></a>
      </div>
      <img src="https://t4.ftcdn.net/jpg/03/34/58/45/240_F_334584524_dIUUbppSoImg6LBL8zCyG9XBdvJjITzm.jpg" alt="bdywtwrkout" />
      </div>

      <div className={styles.recent}><h1>Recent Articles</h1></div>

      <div className={styles.cards}>
        <div className={styles.card1}>
          <img src="https://t3.ftcdn.net/jpg/05/45/06/16/240_F_545061671_997bR1zmp4vc9IivZNNslJPbufjuTLjR.jpg" alt="trainer"/>
          <h3>How to Find a Good Personal Trainer or Coach: 5 Mistakes to Avoid!</h3>
          <p>Before you fork out some cash for a personal trainer, read this guide! It’ll help you spot the difference between a bad personal trainer and an AMAZING trainer. And trust us, having the right trainer can make ALL the difference in the world.</p>
          <a href="https://www.nerdfitness.com/blog/how-to-hire-a-good-personal-trainer/"><button>Read more...</button></a>
        </div>

        <div className={styles.card1}>
          <img src="https://t4.ftcdn.net/jpg/01/81/94/75/240_F_181947598_cJYgT6Iz82vaeyW1170OcTaYBsQChdA9.jpg" alt="routine" />
          <h3>How To Build Your Own Workout Routine: Plans, Schedules, and Exercises</h3>
          <p>a workout should be developed around a person’s age, goals, nutritional strategy, free time, etc.Whatever your goals are, it’s good to write them down and be aware of what you’re trying to accomplish.</p>
          <a href="https://www.nerdfitness.com/blog/how-to-build-your-own-workout-routine/"><button>Read more...</button></a>
        </div>

        <div className={styles.card1}>
          <img src="https://t4.ftcdn.net/jpg/06/06/80/57/240_F_606805756_dt9loJgHQt8Pr0L7f4d8SiREskzn7Szb.jpg" alt="training" />
          <h3>5 Best Strength Training Workout Routines For Beginners (Home & Gym)</h3>
          <p>You’ll look back years from now and thank “Past You” for starting strength training today.And I promise, you WILL strength train today.After all, strength training or resistance training doesn’t need to be scary or overcomplicated!</p>
          <a href="https://www.nerdfitness.com/blog/strength-training-101-where-do-i-start/"><button>Read more...</button></a>
        </div>

      </div>

      <div className={styles.cards2}>
        <div className={styles.card1}>
          <img src="https://t3.ftcdn.net/jpg/05/29/86/46/240_F_529864654_XwOJmCyi0lAvBWofDOeCa7bDuMoMwwlA.jpg" alt="diet" />
          <h3>What’s The Best Diet to Lose Weight? (Which Diet is Right For Me?)</h3>
          <p>If you’re currently trying to lose weight, you might be asking yourself:
            “Which diet is right for me?”
            What’s the best diet for weight loss?”
          They’re great questions, both with many different variables to consider.
          Today, we’ll unpack it all for you.</p>
          <a href="https://www.nerdfitness.com/blog/paleo-keto-slow-carb-vegan-how-to-determine-the-perfect-diet-for-you/"><button>Read more...</button></a>
        </div>

        <div className={styles.card1}>
          <img src="https://www.nerdfitness.com/wp-content/uploads/2018/07/superhero_kid-768x512.jpg" alt="life"/>
          <h3>How 20 Seconds of Courage Can Change Your Life.</h3>
          <p>Today I’m going to issue you a challenge, and it will only require 20 seconds.
            And you’re going to do it. And it’s going to change your life.</p>
          <a href="https://www.nerdfitness.com/blog/the-20-second-challenge/"><button>Read more...</button></a>
        </div>

        <div className={styles.card1}>
          <img src="https://t3.ftcdn.net/jpg/01/33/75/16/240_F_133751643_fxfcTlO3Wa78HlgKJsKprepRjhldLrFq.jpg" alt="confidence"/>
          <h3>5 Ways to Appear More Confident (Instantly)</h3>
          <p>Confidence is one of the most important skills in life that you can acquire (other than learning to use the Force, obviously).We’re naturally attracted to and will have our opinions swayed by those who have (or appear to have) a lot of confidence.</p>
          <a href="https://www.nerdfitness.com/blog/5-ways-to-immediately-appear-more-confident/"><button>Read more...</button></a>
        </div>

      </div>
    </>
  );
}

export default Blogs;
