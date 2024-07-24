'use client'
import { FC, ReactNode } from 'react'
import { IStateSchema, StoreProvider } from './providers/StoreProvider'
import Layout from '@web/layouts/Layout'
import { Toaster } from 'react-hot-toast'
import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl'

interface IProps {
    children: ReactNode
    locale: string
    messages: AbstractIntlMessages
}

const MainApp: FC<IProps> = (props) => {
    const { children, locale } = props

    const initialState: IStateSchema = {
        _persist: { version: 0, rehydrated: false },
    }

    return (
        <StoreProvider initialState={initialState}>
            <html lang={locale}>
                <body className='web'>
                    <NextIntlClientProvider>
                        <>
                            <Layout>{children}</Layout>
                            <Toaster />
                        </>
                    </NextIntlClientProvider>
                </body>
            </html>
        </StoreProvider>
    )
}

export default MainApp
