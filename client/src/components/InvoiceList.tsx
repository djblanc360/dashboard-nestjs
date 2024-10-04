import { useState } from 'react';

import { DataGrid, GridColDef, GridRowParams, GridPaginationModel } from '@mui/x-data-grid';
import { Modal, Box } from '@mui/material';

// import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useQuery } from '@tanstack/react-query';

import { fetchInvoices } from '@services/invoiceService';
import InvoiceModal from './InvoiceModal';
import { Invoice } from '../types/invoice';

// import { displayInvoices, selectInvoice } from '@store/invoiceSlice';

const columns: GridColDef[] = [
    { field: 'vendor_name', headerName: 'Vendor', flex: 1, minWidth: 150 },
    { field: 'description', headerName: 'Description', flex: 2, minWidth: 200 },
    { field: 'due_date', headerName: 'Due Date', width: 130 },
    { field: 'amount', headerName: 'Amount', width: 130 },
    { field: 'paid', headerName: 'Paid', width: 130 },
];

const InvoiceList = () => {
    const [open, setOpen] = useState(false);
    const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({ pageSize: 3, page: 0 });

    const handleRowClick = (params: GridRowParams) => {
      setSelectedInvoice(params.row);
      setOpen(true);
    };
  
    const handleClose = () => setOpen(false);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['invoices', { page: 1, limit: 10 }],
        queryFn: () => fetchInvoices({ page: 1, limit: 10 }),
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
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={invoices}
        columns={columns}
        rowCount={invoices.length}
        paginationMode="client"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[3]}
        onRowClick={handleRowClick}
        sx={{
            boxShadow: 2,
            border: 2,
            borderColor: '#202844',
            '& .MuiDataGrid-columnHeaders': {
                backgroundColor: '#273575',
                color: '#202844',
                fontSize: '1rem',
            },
            '& .MuiDataGrid-row': {
                color: '#202844',
                backgroundColor: '#fafafa',
                '&:hover': {
                    color: '#fafafa',
                    backgroundColor: '#273575',
                },
                '&.Mui-selected': {
                    color: '#fafafa',
                    backgroundColor: '#273575',
                },
            },
            '& .MuiDataGrid-cell': {
                '&:hover': {
                    cursor: 'pointer',
                },
            },
            '& .MuiDataGrid-footerContainer': {
                backgroundColor: '#fafafa',
            },
        }}
      />
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#fafafa',
            boxShadow: 24,
            p: 4,
            width: 400,
          }}
        >
          {selectedInvoice && <InvoiceModal invoice={selectedInvoice} />}
        </Box>
      </Modal>
    </div>
  )
}

export default InvoiceList;