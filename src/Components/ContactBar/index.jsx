// import TwitterIcon from '@mui/icons-material/Twitter'
// import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import styles from './styles.module.css'
import constant from "../../constant.json"

function Contactbar(){
    return(
        <div className={styles.contact_bar_wrapper}>
            <div className={styles.contact_bar}>
                <a href={constant.linkedin} target="_blank" className={styles.icon}>
                    <LinkedInIcon />
                </a>
                <a href={constant.github} target="_blank" className={styles.icon}>
                    <GitHubIcon />
                </a>
                {/* <a href='/' target="_blank" className={styles.icon}>
                    <InstagramIcon />
                </a>
                <a href={constant.} target="_blank" className={styles.icon}>
                    <TwitterIcon />
                </a> */}
                <div className={styles.line}></div>
                </div>
                <div className={styles.contact_bar}>
                <a href='/' target="_blank" className={styles.email}>
                    {constant.email}
                </a>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}

export default Contactbar