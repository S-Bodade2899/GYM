import styles from "./Header.module.css";
import NavMobile from "../optionList/OptionList";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import logo from "../../../logo.png";
import FitClub from "./FitClub.png";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  const [isNavMobileVisible, setIsNavMobileVisible] = useState(false);

  function showList() {
    setIsNavMobileVisible(true);
  }
  function Closelist() {
    setIsNavMobileVisible(false);
  }

  // function handListOpening () {
  //     setIsNavMobileVisible(!isNavMobileVisible)
  // }

  if (isNavMobileVisible) {
    return <NavMobile closeFunction={Closelist} />;
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt={logo} height={80} width={80} />

        <a href="/">
          <button className={styles.btn}>
            <img src={FitClub} alt={logo} height={80} width={150} />
          </button>
        </a>
      </div>
      <div className={styles.navWrapper}>
        <Navbar />
      </div>
      <div className={styles.iconWrapper}>
        <HiMenuAlt1 onClick={showList} />
      </div>
    </header>
  );
}
