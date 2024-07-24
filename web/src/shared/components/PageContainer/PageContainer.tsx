'use client'
import Head from 'next/head'
import { FC, ReactNode } from 'react'

interface IProps {
    children: ReactNode
    title?: string
    description?: string
}

const PageContainer: FC<IProps> = (props) => {
    const { children, title, description } = props

    return (
        <>
            <Head>
                <title>{`${title ? title : process.env.title} | ${process.env.title}`}</title>
                <meta name='description' content={description} />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
            </Head>
            {children}
        </>
    )
}

export default PageContainer
