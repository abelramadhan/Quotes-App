'use client';

import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const ReduxWrapper = (props: PropsWithChildren) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>{props.children}</PersistGate>
        </Provider>
    );
};

export default ReduxWrapper;
