import Link from 'next/link'
import { FC, useState } from 'react'
import { headerNav } from '../../constants/headerNav'
import HeaderCatalog from '../HeaderCatalog/HeaderCatalog'
import styles from './HeaderNav.module.css'

interface IProps {}

const HeaderNav: FC<IProps> = (props) => {
    const {} = props

    const [showCatalog, setShowCatalog] = useState<boolean>(false)

    const toggleDrawerHandler = () => setShowCatalog((prev) => !prev)

    return (
        <div className={styles.navigations}>
            <nav
                onMouseEnter={toggleDrawerHandler}
                className={styles.navigation}
            >
                {headerNav.map((item, i) => {
                    return (
                        <Link href={item.path} key={i}>
                            {item.title}
                        </Link>
                    )
                })}
            </nav>

            {showCatalog && (
                <HeaderCatalog
                    open={showCatalog}
                    onClose={toggleDrawerHandler}
                />
            )}
        </div>
    )
}

export default HeaderNav
