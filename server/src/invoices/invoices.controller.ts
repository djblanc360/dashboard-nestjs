import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { InvoicesService } from './invoices.service';
import { Invoice } from '@prisma/client';

@Controller('invoices') // route prefix
export class InvoicesController {
    constructor(private readonly invoicesService: InvoicesService) {}

    @Get()
    async getInvoices(): Promise<Invoice[]> {
        return this.invoicesService.getInvoices({
            take: 10,
            orderBy: {
                id: 'asc',
            },
        });
    }


    @Get(':id')
    async getInvoice(@Param('id') id: string): Promise<Invoice | null> {
        return this.invoicesService.getInvoice({ id: Number(id) });
    }

    // adding this just for testing
    @Post()
    async postInvoice(@Body() data: { 
        vendor_name: string; 
        amount: number; 
        due_date: string; 
        description: string | null; 
        user_id: number; 
        paid: boolean; 
    }): Promise<Invoice> {
        const invoiceCreateInput: Prisma.InvoiceCreateInput = {
            vendor_name: data.vendor_name,
            amount: data.amount,
            due_date: new Date(data.due_date),
            description: data.description,
            paid: data.paid,
            user: {
                connect: { id: data.user_id }
            }
        };
        return this.invoicesService.postInvoice(invoiceCreateInput);
    }

    @Get('/total')
    async getInvoicesTotal(@Query('due_date') due_date: string): Promise<number> {
        return this.invoicesService.getInvoicesTotal(new Date(due_date));
    }
}