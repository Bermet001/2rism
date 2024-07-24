import { FC } from 'react'
import { headerNav } from '@web/widgets/Header/constants/headerNav'
import Link from 'next/link'
import styles from './FooterNav.module.css'

const FooterNav: FC = () => (
    <div className={styles.navigations}>
        <p className={styles.title}>Main</p>

        <nav className={styles.navigation}>
            {headerNav.slice(1).map((item, i) => (
                <Link className={styles.link} href={item.path} key={i}>
                    {item.title}
                </Link>
            ))}
        </nav>
    </div>
)

export default FooterNav
