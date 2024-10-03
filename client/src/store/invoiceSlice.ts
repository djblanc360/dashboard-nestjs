import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

export const fetchInvoices = createAsyncThunk(
    'invoices/',
    async ({ page = 1, limit = 10 }: { page?: number; limit?: number }) => {
        const response = await fetch(`http://localhost:3000/invoices?page=${page}&limit=${limit}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Failed to fetch invoices');
        }
        const result = await response.json();
        return {
            invoices: result,
            currentPage: page,
            totalPages: Math.ceil(result.length / limit)
        };
    }
);

export const fetchInvoiceById = createAsyncThunk(
    'invoices/:id',
    async (id: number) => {
        const response = await fetch(`/invoices/${id}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Failed to fetch invoice');
        }
        const result = await response.json();
        return result;
    }
);


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
    extraReducers: (builder) => {
        // invoices/
        builder.addCase(fetchInvoices.fulfilled, (state, action) => {
            state.loading = false;
            state.invoices = action.payload.invoices;
            state.currentPage = action.payload.currentPage;
            state.totalPages = action.payload.totalPages;
        });
        builder.addCase(fetchInvoices.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchInvoices.rejected, (state, action) => {
            state.loading = false;
            state.invoices = [];
            state.currentPage = 1;
            state.totalPages = 1;
            console.error('Failed to fetch invoices:', action.error.message);
        });
        // invoices/:id
        builder.addCase(fetchInvoiceById.fulfilled, (state, action) => {
            state.loading = false;
            state.selectedInvoice = action.payload;
        });
        builder.addCase(fetchInvoiceById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchInvoiceById.rejected, (state, action) => {
            state.loading = false;
            state.selectedInvoice = null;
            console.error('Failed to fetch invoice:', action.error.message);
        });
    },
});

export const { setSelectedInvoice, setLoading } = invoiceSlice.actions;

export const displayInvoices = (state: { invoices: InvoicesState }) => state.invoices.invoices;
export const selectInvoice = (state: { invoices: InvoicesState }) => state.invoices.selectedInvoice;

export default invoiceSlice.reducer;