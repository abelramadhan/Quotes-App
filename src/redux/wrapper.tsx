'use client';

import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

const ReduxWrapper = (props: PropsWithChildren) => {
    return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxWrapper;