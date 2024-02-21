import Heading from "../../Components/Heading";
import styles from './styles.module.css';
import constant from "../../constant.json"

function About() {
    // Assume constant.about contains the HTML content
    var aboutDescription = {__html: constant.about};

    return (
        <section id="about">
            <Heading heading="About Me" />
            <div className={styles.container}>
                <div className={styles.left}>
                    <p className={styles.desc} dangerouslySetInnerHTML={aboutDescription}></p>
                </div>
                <div className={styles.right}>
                    <img src={constant.image} alt="" className={styles.profile_img}></img>
                    <div className={styles.img_border}></div>
                </div>
            </div>
        </section>
    )
}

export default About