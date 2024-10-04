// import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useQuery } from '@tanstack/react-query';

import { fetchInvoices } from '@services/invoiceService';
import { Invoice } from '../types/invoice';

const InvoiceList = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['invoices', { page: 1, limit: 5 }],
        queryFn: () => fetchInvoices({ page: 1, limit: 5 })
    });
    // const invoices = useAppSelector((state) => state.invoices.invoices);
    // const loading = useAppSelector((state) => state.invoices.loading);
    // const dispatch = useAppDispatch();

    if (isLoading) {
        return <p>Retrieving invoices...</p>;
    }

    if (isError) {
        return <p>Error: {error.message}</p>;
    }  

    const invoices = data?.invoices || [];

    if (invoices.length === 0) {
        return <p>No available invoices</p>;
    }

    console.log('invoices', invoices);

    return (
        <ul>
            {invoices.map((invoice: Invoice) => (
                <li key={invoice.id}>{invoice.vendor_name}</li>
            ))}
        </ul>
    )
}

export default InvoiceList;