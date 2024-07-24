import { FC } from 'react'
import Instagram from '../../assets/ico/instagram.svg'
import Facebook from '../../assets/ico/facebook.svg'
import Telegram from '../../assets/ico/telegram.svg'
import Linkedin from '../../assets/ico/linkedin.svg'
import styles from './FooterSocials.module.css'

const FooterSocials: FC = () => (
    <div className={styles.container}>
        <p className={styles.title}>Social media</p>

        <div className={styles.socials_icon_container}>
            <Instagram />
            <Facebook />
            <Telegram />
            <Linkedin />
        </div>
    </div>
)

export default FooterSocials
