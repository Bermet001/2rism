import { FC, useState } from 'react'
import { headerCoatalog } from '../../constants/headerNav'
import { IHeaderCatalog } from '../../model/header'
import styles from './HeaderCatalog.module.css'
import HeaderCatalogItem from '../HeaderCatalogItem/HeaderCatalogItem'
import { Drawer, styled } from '@mui/material'
import { Container } from '@web/shared'

interface IProps {
    onClose: () => void
    open: boolean
}

const HeaderCatalog: FC<IProps> = (props) => {
    const { onClose, open } = props

    const [catalog, setCatalog] = useState<IHeaderCatalog[]>([])

    return (
        <StyledDrawer open={open} onClose={onClose} anchor='top'>
            <Container>
                <div className={styles.catalog}>
                    <div className={styles.catalogContent}>
                        <nav className={styles.navigations}>
                            {headerCoatalog.map((item, i) => (
                                <p
                                    className={styles.link}
                                    key={i}
                                    onMouseEnter={() =>
                                        setCatalog(item.catalog)
                                    }
                                >
                                    {item.title}
                                </p>
                            ))}
                        </nav>

                        {catalog.length !== 0 && (
                            <div className={styles.line} />
                        )}
                        <HeaderCatalogItem catalog={catalog} />
                    </div>
                </div>
            </Container>
        </StyledDrawer>
    )
}

export default HeaderCatalog

const StyledDrawer = styled(Drawer)(() => ({
    '& .MuiDrawer-paper': {
        marginTop: '3.9rem',
        backgroundColor: 'var(--background-color-EEEEEE)',
    },
}))
