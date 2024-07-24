import { FC } from 'react'
import FooterDescription from '../FooterDescription/FooterDescription'
import FooterNav from '../FooterNav/FooterNav'
import FooterContacs from '../FooterContacts/FooterContacs'
import FooterSocials from '../FooterSocials/FooterSocials '
import styles from './Footer.module.css'
import { Container } from '@web/shared'

const Footer: FC = () => (
    <footer className={styles.footer}>
        <Container>
            <div>
                <div className={styles.container}>
                    <FooterDescription />
                    <FooterNav />
                    <FooterContacs />
                    <FooterSocials />
                </div>

                <div className={styles.info}>
                    <p className={styles.text}>ELGid ©2024</p>
                    <p className={styles.text}>Privacy policy</p>
                </div>
            </div>
        </Container>
    </footer>
)

export default Footer
