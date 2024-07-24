import { FC, ReactNode, useCallback } from 'react'
import MainLayout from '../MainLayout/MainLayout'
import { usePathname } from 'next/navigation'
import { AuthLayout } from '../AuthLayout'

interface IProps {
    children: ReactNode
}

const Layout: FC<IProps> = (props) => {
    const { children } = props
    const pathname = usePathname()

    const currentLayout = useCallback(() => {
        if (pathname.includes('login') || pathname.includes('signup')) {
            return <AuthLayout>{children}</AuthLayout>
        }

        return <MainLayout>{children}</MainLayout>
    }, [children, pathname])

    return currentLayout()
}

export default Layout
