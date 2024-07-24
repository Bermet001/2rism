import { Footer } from '@web/widgets/Footer'
import { Header } from '@web/widgets/Header'
import { FC, ReactNode } from 'react'

interface IProps {
    children: ReactNode
}

const MainLayout: FC<IProps> = (props) => {
    const { children } = props

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout
