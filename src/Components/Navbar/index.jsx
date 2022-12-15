import styles from './styles.module.css';

function Navbar(){
    return(
        <nav className={styles.nav_container}>
            <div className={styles.nav_left}>
                <a href='#home'>Gourav</a>
            </div>
            <div className={styles.nav_right}>
            <a href='#about' className={styles.nav_link}>
            About
            </a>
            <a href='#experience' className={styles.nav_link}>
            Experience
            </a>
            <a href='#work' className={styles.nav_link}>
            Work
            </a>
            <a href='#contact' className={styles.nav_link}>
            Contact
            </a>
            <a href='#resume' className={styles.nav_link}>
            Resume
            </a>

            </div>
        </nav>
    )
}

export default Navbar;