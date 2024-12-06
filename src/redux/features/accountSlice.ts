// accountSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import inner_account_data from '@/data/inner-data/innerAccountsData';

const accounts = inner_account_data

export interface Account {
    id: number;
    user: string;
    email: string;
    password: string;
    description: string;
    publications: { videoId: number; title: string }[];
    bought: { videoId: number; title: string }[];
}

interface AccountState {
    accounts: Account[] | any[];
    account: Account | {};
}

const initialState: AccountState = {
    accounts: accounts,
    account: {},
};

export const accountSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        single_account: (state, action: PayloadAction<number>) => {
            state.account = state.accounts.find((p) => Number(p.id) === Number(action.payload)) || {};
        },
        setAccounts: (state, action: PayloadAction<Account[]>) => {
            state.accounts = action.payload; // Actualiza el estado de accounts
        },
    },
});

export const { single_account, setAccounts } = accountSlice.actions; // Exporta setAccounts

// Selectors
export const selectAccounts = (state: { accounts: AccountState }) => state.accounts.accounts;
export const selectAccount = (state: { accounts: AccountState }) => state?.accounts?.account;

export default accountSlice.reducer;
