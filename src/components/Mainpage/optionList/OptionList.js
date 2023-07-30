import styles from './OptionList.module.css';
import { RxCrossCircled } from "react-icons/rx";


export default function NavMobile ({closeFunction}) {
    return (
        <div className={styles.wrapper}>

            <div className={styles.iconHolder}>
                <RxCrossCircled 
                    className={styles.closeIcon}
                    onClick={closeFunction}
                />
            </div>
            <div>

                <p>Home</p>
                <p>About Us</p>
                <p>Classes</p>
                <p>Blogs</p>

            </div>

            <div className={styles.button}>
                <button>Join Us</button>
            </div>

        </div>
    )
}