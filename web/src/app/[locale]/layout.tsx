import type { Metadata } from 'next'
import '@web/appLayer/styles/index.css'
import MainApp from '@web/appLayer/MainApp'
// import { getMessages } from 'next-intl/server'

export const metadata: Metadata = {
    title: process.env.title,
    description: process.env.description,
    icons: '',
}

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    // const messages = await getMessages()
    return (
        <MainApp
            locale={locale}
            // messages={messages}
        >
            {children}
        </MainApp>
    )
}
