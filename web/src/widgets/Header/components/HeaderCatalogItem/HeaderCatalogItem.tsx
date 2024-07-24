import React, { FC } from 'react'
import { IHeaderCatalog } from '../../model/header'
import Link from 'next/link'
import styles from './HeaderCatalogItem.module.css'

interface IProps {
    catalog: IHeaderCatalog[]
}

const HeaderCatalogItem: FC<IProps> = (props) => {
    const { catalog } = props

    return (
        <div className={styles.hoveredLinkText}>
            {catalog.map((item, i) => (
                <Link className={styles.innerLink} href={item.path} key={i}>
                    {item.title}
                </Link>
            ))}
        </div>
    )
}

export default HeaderCatalogItem
