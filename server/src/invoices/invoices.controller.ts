import { Controller, Get, Param} from '@nestjs/common';
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
}