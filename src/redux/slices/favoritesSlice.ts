import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FavoriteQuotesState {
    quotes: string[];
}

const initialState: FavoriteQuotesState = { quotes: [] };

const FavoriteQuotesSlice = createSlice({
    name: 'FavoriteQuotesSlice',
    initialState,
    reducers: {
        addQuote: (state, action: PayloadAction<string>) => {
            const isPresent = state.quotes.find((quote) => quote === action.payload);
            if (isPresent) return;
            state.quotes.push(action.payload);
        },
        removeQuote: (state, action: PayloadAction<string>) => {
            const index = state.quotes.findIndex((quote) => quote === action.payload);
            if (index === -1) return;
            state.quotes.splice(index, 1);
        },
    },
});

const selectFavorites = (state: { FavoriteQuotesSlice: FavoriteQuotesState }) => state.FavoriteQuotesSlice;
export const { addQuote } = FavoriteQuotesSlice.actions;
export const quotesSelector = createSelector([selectFavorites], (session) => session.quotes);

export default FavoriteQuotesSlice;
