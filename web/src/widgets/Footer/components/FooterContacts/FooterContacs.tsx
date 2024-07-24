import { FC } from 'react'
import styles from './FooterContacts.module.css'

const FooterContacs: FC = () => (
    <div className={styles.container}>
        <p className={styles.title}>Contacts</p>

        <div className={styles.contacts_container}>
            <a className={styles.contact} href='mailto:elgid@gmail.com'>
                elgid@gmail.com
            </a>
            <a className={styles.contact} href='tel:+996 555-555-555'>
                +555-555-555
            </a>
            <a className={styles.contact} href='tel:+996 555-555-555'>
                +555-555-555
            </a>
        </div>
    </div>
)

export default FooterContacs
