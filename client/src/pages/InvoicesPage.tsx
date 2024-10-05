import InvoiceList from '@components/InvoiceList';

const InvoicesPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='p-8'>
                <InvoiceList />
            </div>
        </div>
    );
};

export default InvoicesPage;