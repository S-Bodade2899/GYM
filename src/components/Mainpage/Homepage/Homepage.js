import React, { Fragment, useState } from "react";
import wrktman from "./wrktman.png";
import styles from "./Homepage.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Register from "../../Register page/Register";

const Homepage = () => {

    // let imges = document.querySelector(".trainers .imges span img");
    
    // const dragging = (e) => {
    //   trainers.imges.scrollLeft = e.pageX;
    // }

    // imges.addEventListener("mousemove", dragging);

    const[isModalOpen, setIsModalOpen] = useState(false)
    
    const openModal = () => {
      setIsModalOpen(true)
    }

    const closeModal = () => {
      setIsModalOpen(false)
    }
    
    function Learnmore() {
        alert("Clicked from about us section")
    }

  return (
    <>
      <div className={styles.container}>
        <img src={wrktman} alt="img" />
        <div className={styles.text}>
          <p className={styles.statmnt}>
            "Take care of your <span>body.</span> It is the only place you have
            to <span>live</span>."
          </p>
          <p className={styles.statmnt1}>
            Empower yourself to make the changes you need to make
          </p>
          <button onClick={openModal}>Join With Us</button>
        </div>
      </div>

      <div className={styles.vid}>
        <iframe
          width="500"
          height="315"
          src="https://www.youtube.com/embed/eaRQF-7hhmo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className={styles.aboutus}>
        <h1>About Us</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <button onClick={Learnmore}>Learn More</button>
      </div>

      <div>
        <div className={styles.chooseus}>
          <h1>Why Choose Us?</h1>
          <ul>
            <li>Consultations with expert</li>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <li>Best Workout Facilities</li>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </ul>
        </div>

        <div className={styles.vid2}>
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/g_bMfP6_TOw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className={styles.explorcont}>
        <img
          src="https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="gyminterior"
        />
        <div className={styles.explore}>
          <h1>Explore Our Fitness Studio</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className={styles.counts}>
            <div>
              <h2>50+</h2>
              <p>Expert Coaches</p>
            </div>
            <div>
              <h2>1K+</h2>
              <p>Members</p>
            </div>
          </div>
          <button>Get Start Now</button>
        </div>
      </div>

      <div className={styles.trnrhed}>
       <h2>Our Proffessional Trainers</h2>
      </div>

      <div className={styles.trainers}>
        <ArrowBackIosIcon className={styles.prevbtn}/>
        <KeyboardArrowUpIcon className={styles.uparw}/>
          <div className={styles.imges} >
            <span><img src="https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" /></span>
            <span><img src="https://images.pexels.com/photos/896059/pexels-photo-896059.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" /></span>
            <span><img src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" /></span>
            <span><img src="https://t4.ftcdn.net/jpg/00/94/05/09/240_F_94050934_EGlgfBVIDkYs0HU2GqvheOCojW2I7G8C.jpg" alt="img" /></span>
            <span><img src="https://t3.ftcdn.net/jpg/02/55/76/20/240_F_255762080_gDssr5sO2RtN2hBEEMoJEp5l9z4APDdw.jpg" alt="img" /></span>
            <span><img src="https://t3.ftcdn.net/jpg/01/78/40/36/240_F_178403622_602GF7w96RNsSgGcVBS5Q6dMTnhlT3iQ.jpg" alt="img" /></span>
          </div>
          <ArrowForwardIosIcon className={styles.nxtbtn}/> 
         <KeyboardArrowDownIcon className={styles.dwnarrw}/>
      </div>

      <div className={styles.packeges}>
        <h1>Our Special Packages</h1>
        <p>
          Reprehenderit id cillum mollit duis labore sit et non proident sit
          amet dolore velit. Laborum enim do elit consequat mollit deserunt sit
          officia nisi do non. Occaecat eiusmod aliquip eiusmod anim pariatur
          excepteur id deserunt minim occaecat officia laboris do cillum.
        </p>
      </div>

      <div className={styles.cards}>
        <div className={styles.silvercrd}>
          <h2>Silver</h2>
          <ul>
            <li>Unlimited Club access 24 hours</li>
            <li>Group Attendance</li>
            <li>Gym visits</li>
            <li>Visit to the bath complex</li>
            <li>Gym fight club</li>
          </ul>
          <h2>$130/month</h2>
          <button>Choose</button>
        </div>

        <div className={styles.goldcrd}>
          <h2>Gold</h2>
          <ul>
            <li>Unlimited Club access 24 hours</li>
            <li>Group Attendance</li>
            <li>Gym visits</li>
            <li>Visit to the bath complex</li>
            <li>Gym fight club</li>
          </ul>
          <h2>$110/month</h2>
          <button>Choose</button>
        </div>

        <div className={styles.primiumcrd}>
          <h2>Premium</h2>
          <ul>
            <li>Unlimited Club access 24 hours</li>
            <li>Group Attendance</li>
            <li>Gym visits</li>
            <li>Visit to the bath complex</li>
            <li>Gym fight club</li>
          </ul>
          <h2>$80/month</h2>
          <button>Choose</button>
        </div>
      </div>
      <Register isOpen={isModalOpen} onclose={closeModal} />
    </>
  );
};

export default Homepage;
