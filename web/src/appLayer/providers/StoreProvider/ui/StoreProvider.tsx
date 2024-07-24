'use client'
import { FC, ReactNode } from 'react'
import { IStateSchema } from '../types/stateSchema'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'

interface IProps {
    children: ReactNode
    initialState: IStateSchema
}

export const StoreProvider: FC<IProps> = (props) => {
    const { children, initialState } = props

    const { store } = createReduxStore(initialState)

    return <Provider store={store}>{children}</Provider>
}
