import { z } from 'zod';

export const getInvoicesDto = z.object({
    take: z.number().optional(),
    skip: z.number().optional(),
    orderBy: z.object({
        id: z.string().optional(),
    }).optional(),
});

export const getInvoiceDto = z.object({
    id: z.number(),
});

export const postInvoiceDto = z.object({
    vendor_name: z.string(),
    amount: z.number(),
    due_date: z.string(),
    description: z.string().nullable(),
    user_id: z.number(),
    paid: z.boolean(),
});


export const getInvoicesTotalDto = z.object({
    due_date: z.string(),
});

export type GetInvoicesDto = z.infer<typeof getInvoicesDto>;
export type GetInvoiceDto = z.infer<typeof getInvoiceDto>;
export type GetInvoicesTotalDto = z.infer<typeof getInvoicesTotalDto>;
export type PostInvoiceDto = z.infer<typeof postInvoiceDto>;