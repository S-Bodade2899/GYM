import React from "react";
import styles from "./Classes.module.css";

function Classes() {
  return (
    <>
      <div className={styles.heading}>
        <h1>Classes we Schedule</h1>
      </div>

      <div className={styles.para}>
        <h1>Class Timing And Programms</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing
          enim eu turpis egestas pretium aenean pharetra magna ac. Placerat orci
          nulla pellentesque dignissim. Facilisis volutpat est velit egestas.
          Urna molestie at elementum eu facilisis sed odio.
        </p>
      </div>

      <div className={styles.container1}>
      <div className={styles.fitness}>
      <h2>Gym Fitness</h2>
      <img src="https://t4.ftcdn.net/jpg/02/71/62/07/240_F_271620731_dRLIn9mgPNCyB0EOwZWpBNAs2kH7szeM.jpg" alt=""/>
      <p>
        Exercise and rest are the cornerstones of improving your quality of
        life. It's not always easy but it's always worth it. When you find a
        fitness routine you enjoy, you'll feel better, look better and be
        happier in your own skin.
      </p>
    </div>

    <div className={styles.fitness}>
      <h2>Indoor Cycling</h2>
      <img src="https://t3.ftcdn.net/jpg/01/00/17/66/240_F_100176677_Det3DxNSgIdteJbezN7qSd5xJH1zDLNG.jpg" alt=""/>
      <p>
      Cycling is a great form of exercise as well as a practical way to get around, but it also carries the risk of significant injury, especially head injury. involves using a special stationary exercise bicycle with a weighted flywheel in a classroom setting.
      </p>
    </div>
      </div>

      <div className={styles.container1}>
      <div className={styles.fitness}>
      <h2>Outdoor Training</h2>
      <img src="https://t3.ftcdn.net/jpg/03/57/30/94/240_F_357309436_c9NsWzDNOMfGtbHwzg6QnTk7wWDw3LAV.jpg" alt=""/>
      <p>
      Outdoor Training includes Running Club, Park Fitness. This session caters for various paces and abilities and takes you out and around our wonderful city.One of the best ways to blast fat is to train outdoors.
      </p>
    </div>

    <div className={styles.fitness}>
      <h2>Free Weights Floor</h2>
      <img src="https://t3.ftcdn.net/jpg/02/45/02/32/240_F_245023253_XpHfxAwBNZDkcIsL4ebB2qG9ZtNKQaun.jpg" alt=""/>
      <p>
      We have an extensive range of free weights and benches, with dumbbells, an array of plate loaded strength equipment, Olympic lifting platforms, power cages, kettlebells, and gymnastic rings.
      </p>
    </div>
      </div>

      <div className={styles.container1}>
      <div className={styles.fitness}>
      <h2>Circuit Training</h2>
      <img src="https://t3.ftcdn.net/jpg/01/96/19/46/240_F_196194626_0vTBXOdEzk8CdqZ7sZsVePk8flSQQ6vH.jpg" alt=""/>
      <p>
      Circuit training is a fast-paced class in which you do one exercise for 30 seconds to 5 minutes and then move on to another exercise. Increases your strength and aerobic fitness and burns lots of calories. Itâ€™s like a game where Everyone begins at a station
      </p>
    </div>

    <div className={styles.fitness}>
      <h2>Cardio Fitness</h2>
      <img src="https://t3.ftcdn.net/jpg/02/55/97/30/240_F_255973060_rIru57rRLw3hjWsrXlyh8H70IwL8i9YP.jpg" alt=""/>
      <p>
      Cardio fitness is important to everyone. Quality cardio workouts can help everybody reach their health and fitness goals, whether those goals include new personal records for competition, lowering blood pressure, reducing cholesterol levels, managing diabetes.
      </p>
    </div>
      </div>

      <div className={styles.container2}>
      <div className={styles.fitness}>
      <h2>Power Yoga</h2>
      <img src="https://t3.ftcdn.net/jpg/03/27/38/44/240_F_327384402_NzqnEUPS2qjwBzs7imQZPN9wRd4B6c4K.jpg" alt=""/>
      <p>
      one up, slim down, and find balance with this high-energy summer workout from power yoga. It brings inner peace, a spiritual boost, and an unparalleled measure of serenity.Power yoga is a general term used to describe a vigorous.
      </p>
    </div>

    <div className={styles.fitness}>
      <h2>Aerobic Classes</h2>
      <img src="https://t3.ftcdn.net/jpg/03/46/42/60/240_F_346426040_UR9rAvXhGbPbhJW6gk8nAy2Fiwis73wS.jpg" alt=""/>
      <p>
      Aerobic exercises, which includes walking, running, and swimming, has been proven to be an effective way for burning fat and losing weight. Aerobic exercise was also a more efficient method of exercise for losing body fat.
      </p>
    </div>
      </div>
  
    </>
  );
}

export default Classes;
