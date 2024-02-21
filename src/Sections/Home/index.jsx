import styles from "./styles.module.css"
import constant from "../../constant.json"

function Home() {
    return(
        <section className={styles.home_section} id="home">
            <p className={styles.greet}>Hi, my name is</p>
            <h1 className={styles.heading_1}>{constant.name}</h1>
            <h1 className={styles.heading_2}>{constant.title}</h1>
            <p className={styles.greet}>{constant.description}</p>
            <button className={styles.btn}><a href ="#work">View my work!</a></button>
        </section>
    )
}

export default Home