import { Container } from '@web/shared'
import HeaderLogo from '../HeaderLogo/HeaderLogo'
import HeaderNav from '../HeaderNav/HeaderNav'
import HeaderUserSelection from '../HeaderUserSelection/HeaderUserSelection'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerContent}>
                    <div className={styles.storesHeader}>
                        <HeaderLogo />
                        <HeaderNav />
                        <HeaderUserSelection />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
