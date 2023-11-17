'use client';

import { useLazyGetQuoteQuery } from '@/redux/api/QuotesApi';
import Card from './Card';
import Button from './Button';
import { useMemo } from 'react';
import { useAppDispatch } from '@/hooks/reduxHooks';
import favoritesSlice from '@/redux/slices/favoritesSlice';

const KanyeQuote = () => {
    const [getQuote, { quote, isFetching }] = useLazyGetQuoteQuery({
        selectFromResult: ({ data, ...rest }) => ({ quote: data?.quote, ...rest }),
    });

    const dispatch = useAppDispatch();
    const { addQuote } = favoritesSlice.actions;

    const content = useMemo(() => {
        if (isFetching) {
            return <span className='text-gray-400 animate-pulse'>Loading...</span>;
        }
        if (!quote) {
            return <span className='text-gray-400'>Click get quote button</span>;
        }
        return <span>{quote}</span>;
    }, [quote, isFetching]);

    const onAddFavorite = () => {
        quote && dispatch(addQuote(quote));
    };

    return (
        <Card title='Quotes by Kanye'>
            <div className='space-y-3'>
                <div className='p-3 bg-gray-100 rounded-md border border-gray-200'>{content}</div>
                <div className='inline-flex items-center gap-2'>
                    <Button onClick={() => getQuote(null)}>Get Quote</Button>
                    <Button
                        disabled={!quote}
                        onClick={onAddFavorite}>
                        Add to Favorites
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default KanyeQuote;
