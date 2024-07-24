import { FC, ReactNode } from 'react'
import styles from './Container.module.css'

interface IProps {
    children: ReactNode
}

const Container: FC<IProps> = (props) => {
    const { children } = props

    return <div className={styles.container}>{children}</div>
}

export default Container
