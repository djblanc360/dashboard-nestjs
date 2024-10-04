export const fetchInvoices = async ({ page = 1, limit = 10 }: { page?: number; limit?: number }) => {
    console.log('fetchInvoices', page, limit);
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

export const fetchInvoiceById = async (id: number) => {
    const response = await fetch(`http://localhost:3000/invoices/${id}`, {
        method: 'GET',
    });
    if (!response.ok) {
        throw new Error('Failed to fetch invoice');
    }
    const result = await response.json();
    return result;
}