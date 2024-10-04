import { Invoice } from '../types/invoice';


const InvoiceModal = ({ invoice }: { invoice: Invoice }) => {
  return (
    <div>
        <h3>Invoice Details</h3>
        <p>ID: {invoice.id}</p>
        <p>Vendor Name: {invoice.vendor_name}</p>
        <p>Amount: ${invoice.amount}</p>
        <p>Due Date: {new Date(invoice.due_date).toLocaleDateString()}</p>
        <p>Description: {invoice.description || 'No description'}</p>
        <p>User ID: {invoice.user_id}</p>
        <p>Paid: {invoice.paid ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default InvoiceModal;
