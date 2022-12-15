import styles from "./styles.module.css"

function Home() {
    return(
        <section className={styles.home_section} id="home">
            <p className={styles.greet}>Hi, my name is</p>
            <h1 className={styles.heading_1}>Gourav.</h1>
            <h1 className={styles.heading_2}>I design for the world.</h1>
            <p className={styles.greet}>My interest in technology and how it intersects with human behaviour is largely what got me into design.<br />I've made it my goal to expose myself to a diverse set of problems in order to be an effective<br />team-member no matter where i land.
            </p>

            <a href ="#work">
                <button className={styles.btn}>View my work!</button>
            </a>
        </section>
    )
}

export default Home