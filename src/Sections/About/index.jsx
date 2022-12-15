import Heading from "../../Components/Heading";
import styles from './styles.module.css';

function About() {
    return (
        <section id="about">
            <Heading heading="About Me" />
            <div className={styles.container}>
            <div className={styles.left}>
                <p className={styles.desc}>
                My expertise is 3d modeling, Realistic rendering, motion Graphics, and Animations. I have worked as a Wedding Album Designer and currently working as a Lead Motion Graphics Designer and freelance 3d modeling artist.
                </p>
                <p className={styles.desc}>
                My expertise is 3d modeling, Realistic rendering, motion Graphics, and Animations. I have worked as a Wedding Album Designer and currently working as a Lead Motion Graphics Designer and freelance 3d modeling artist.
                </p>
            </div>
            <div className={styles.right}>
                <img src="../../me.jpg" alt="" className={styles.profile_img}></img>
                <div className={styles.img_border}></div>
            </div>
            </div>
        </section>
    )
}

export default About