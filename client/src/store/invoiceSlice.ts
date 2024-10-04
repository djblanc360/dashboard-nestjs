import { createSlice} from "@reduxjs/toolkit";
import { Invoice } from "../types/invoice";

interface InvoicesState {
    invoices: Invoice[];
    selectedInvoice: Invoice | null;
    loading: boolean;
    currentPage: number;
    totalPages: number;
}

const initialState: InvoicesState = {
    invoices: [],
    selectedInvoice: null,
    loading: false,
    currentPage: 1,
    totalPages: 1,
};


export const invoiceSlice = createSlice({
    name: 'invoices',
    initialState,
    reducers: {
        setSelectedInvoice: (state, action) => {
            state.selectedInvoice = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setSelectedInvoice, setLoading } = invoiceSlice.actions;

export const displayInvoices = (state: { invoices: InvoicesState }) => state.invoices.invoices;
export const selectInvoice = (state: { invoices: InvoicesState }) => state.invoices.selectedInvoice;

export default invoiceSlice.reducer;