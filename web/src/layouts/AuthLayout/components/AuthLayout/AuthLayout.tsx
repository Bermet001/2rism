import { FC, ReactNode } from 'react'
import styles from './AuthLayout.module.css'
import { Container } from '@web/shared'

interface IProps {
    children: ReactNode
}

const AuthLayout: FC<IProps> = (props) => {
    const { children } = props

    return (
        <Container>
            <div className={styles.authLayout}>
                <div className={styles.children}>{children}</div>
            </div>
        </Container>
    )
}

export default AuthLayout
