'use client';

import Card from './Card';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import FavoriteQuotesSlice, { quotesSelector } from '@/redux/slices/favoritesSlice';

const FavoriteQuotes = () => {
    const quotes = useAppSelector(quotesSelector);
    const dispatch = useAppDispatch();
    const { removeQuote } = FavoriteQuotesSlice.actions;

    return (
        <Card title='Your Favorite Quotes'>
            <ul className='flex flex-col gap-0.5'>
                {Array.from(quotes).map((quote, index) => (
                    <li key={index}>
                        <button
                            className='inline-flex items-start gap-1 py-0.5 px-3 hover:bg-red-500/10 rounded-md w-full'
                            onClick={() => dispatch(removeQuote(quote))}>
                            <span className='w-5 text-sm mt-0.5 font-semibold'>{index + 1}.</span>
                            <span className='flex-1 text-start'>{quote}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default FavoriteQuotes;
