'use client'
import { Criteria } from '@web/widgets/Criteria'
import React, { FC } from 'react'
import { useTranslations } from 'next-intl'

interface IProps {}

const MainPage: FC<IProps> = (props) => {
    const {} = props
    const t = useTranslations('Index')

    return (
        <div>
            {t('title')}
            <Criteria />
        </div>
    )
}

export default MainPage
