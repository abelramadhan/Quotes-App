// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type QuoteResponse = {
    quote: string;
};

// Define a service using a base URL and expected endpoints
export const QuotesApi = createApi({
    reducerPath: 'QuotesApi',
    baseQuery: fetchBaseQuery(),
    tagTypes: ['Query'],
    endpoints: (builder) => ({
        getQuote: builder.query<QuoteResponse, null>({
            query: () => ({ url: '/quote', method: 'GET' }),
            providesTags: ['Query'],
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetQuoteQuery } = QuotesApi;
