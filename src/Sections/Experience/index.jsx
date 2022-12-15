import { useState } from "react";
import Heading from "./../../Components/Heading"
import constant from "./../../constant.json"
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import styles from "./styles.module.css"

function Experience() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return(
        <section id="experience">
            <Heading heading="Where I've Worked" />
            <div className={styles.container}>
                <div className={styles.left}>
                    {constant.experiences.map((experiences, index) => (
                        <div className={
                            index === currentIndex
                            ?`${styles.tab} ${styles.active}`
                            : `${styles.tab}`
                        }
                        onClick={() => setCurrentIndex(index)}>

                            {experiences.company}
                        </div>

                    ))}
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>
                        {constant.experiences[currentIndex].title}{""}
                        <a href={constant.experiences[currentIndex].link}
                        target="_blank"
                        rel="moreferrer">
                            @{constant.experiences[currentIndex].company}
                        </a>

                    </h1>
                    <p className={styles.duration}>
                    {constant.experiences[currentIndex].duration}
                    </p>
                    {constant.experiences[currentIndex].desc.map((point) => (
                        <p className={styles.desc}>
                            <PlayArrowIcon /> {point}
                        </p>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Experience