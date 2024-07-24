import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { IStateSchema } from '../types/stateSchema'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

export const createReduxStore = (initialState: IStateSchema) => {
    const persistConfig = {
        key: 'nextjs',
        storage,
    }

    const rootReducer = combineReducers<IStateSchema>({
        _persist: { version: 0, rehydrated: false },
    })

    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store = configureStore({
        reducer: persistedReducer,
        devTools: true,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    })

    const persistor = persistStore(store)

    return { store, persistor }
}

export type AppDispatch = ReturnType<
    typeof createReduxStore
>['store']['dispatch']
