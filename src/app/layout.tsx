import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import ReduxWrapper from '@/redux/wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Quotes by Kanye',
    description: 'For Test purposes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <ReduxWrapper>{children}</ReduxWrapper>
            </body>
        </html>
    );
}
