import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { fetchInvoices } from '@store/invoiceSlice';

const InvoiceList = () => {
    const invoices = useAppSelector((state) => state.invoices.invoices);
    const loading = useAppSelector((state) => state.invoices.loading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchInvoices({ page: 1, limit: 5 }));
    }, [dispatch]);

    if (loading) {
        return <p>Retrieving invoices...</p>;
    }

    if (!invoices || invoices.length === 0) {
        return <p>No available invoices</p>;
    }

    console.log('invoices', invoices);

    return (
        <ul>
            {invoices.map((invoice) => (
                <li key={invoice.id}>{invoice.vendor_name}</li>
            ))}
        </ul>
    )
}

export default InvoiceList;