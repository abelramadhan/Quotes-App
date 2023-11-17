'use client';

import Card from './Card';
import Button from './Button';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import CustomQuotesSlice, { quotesSelector } from '@/redux/slices/customSlice';
import Input from './Input';

const CustomQuotes = () => {
    const [quote, setQuote] = useState<string>('');

    const quotes = useAppSelector(quotesSelector);
    const dispatch = useAppDispatch();
    const { addQuote, removeQuote } = CustomQuotesSlice.actions;

    const onAddQuote = () => {
        if (quote) {
            dispatch(addQuote(quote));
            setQuote('');
        }
    };

    return (
        <Card title='Your Quotes'>
            <div className='divide-y divide-gray-300'>
                <div className='pb-3 inline-flex items-center justify-stretch gap-2 w-full'>
                    <Input
                        value={quote}
                        onChange={(e) => setQuote(e.target.value)}
                        type='textarea'
                    />
                    <Button
                        className='!py-2.5'
                        onClick={onAddQuote}>
                        Add Quote
                    </Button>
                </div>
                <ul className='pt-3 flex flex-col gap-0.5'>
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
            </div>
        </Card>
    );
};

export default CustomQuotes;
