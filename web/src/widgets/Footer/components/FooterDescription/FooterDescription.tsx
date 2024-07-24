import { FC } from 'react'
import FooterLogo from '../FooterLogo/FooterLogo'
import styles from './FooterDescription.module.css'

const FooterDescription: FC = () => (
    <div className={styles.container}>
        <FooterLogo />

        <p className={styles.description}>
            EIGid - your guide to Kyrgyzstan. On our platform, you can easily
            book tours and travel experiences throughout Kyrgyzstan, discovering
            unique places and events. We offer a convenient and reliable way to
            plan your next adventure in this beautiful country, including access
            to the best local events and attractions.
        </p>
    </div>
)

export default FooterDescription
