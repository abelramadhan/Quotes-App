import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { QuotesApi } from './api/QuotesApi';
import {
    persistStore,
    persistReducer,
    PersistConfig,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import FavoriteQuotessReducer from './slices/favoritesSlice';
import CustomQuotesSlice from './slices/customSlice';
import storage from 'redux-persist/lib/storage';
// ...

const persistConfig: PersistConfig<any> = {
    key: 'REDUX_PERSIST',
    storage,
};

export const store = configureStore({
    reducer: persistReducer(
        persistConfig,
        combineReducers({
            [QuotesApi.reducerPath]: QuotesApi.reducer,
            [FavoriteQuotessReducer.name]: FavoriteQuotessReducer.reducer,
            [CustomQuotesSlice.name]: CustomQuotesSlice.reducer,
        })
    ),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat([QuotesApi.middleware]),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
