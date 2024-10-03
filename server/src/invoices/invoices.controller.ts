import { Body, Controller, Get, Param, Post, Query, BadRequestException, Req } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { InvoicesService } from './invoices.service';
import { Invoice } from '@prisma/client';
import { getInvoicesDto, getInvoiceDto, postInvoiceDto, getInvoicesTotalDto } from './invoices.dto';
import { FastifyRequest, FastifyReply } from 'fastify';

interface PaginationQuery {
    page?: string;
    limit?: string;
  }

@Controller('invoices') // route prefix
export class InvoicesController {
    constructor(private readonly invoicesService: InvoicesService) {}

    @Get()
    async getInvoices(
        @Query() query: unknown, 
        @Req() request: FastifyRequest<{ Querystring: PaginationQuery }>,
    ): Promise<Invoice[]> {
        const result = getInvoicesDto.safeParse(query);
        if (!result.success) {
            throw new BadRequestException(result.error.errors);
        }

        const page = parseInt(request.query.page || '1', 10); 
        const limit = parseInt(request.query.limit || '3', 10);
        const skip = (page - 1) * limit;

        return this.invoicesService.getInvoices({
            take: limit,
            skip,
            orderBy: {
                id: 'asc',
            },
        });
    }


    @Get(':id')
    async getInvoice(@Param('id') id: string): Promise<Invoice | null> {
        const result = getInvoiceDto.safeParse({ id: Number(id) });
        if (!result.success) {
            throw new BadRequestException(result.error.errors);
        }

        return this.invoicesService.getInvoice({ id: result.data.id });
    }

    // adding this just for testing
    @Post()
    async postInvoice(@Body() body: object): Promise<Invoice> {
        const result = postInvoiceDto.safeParse(body);
        if (!result.success) {
            throw new BadRequestException(result.error.errors);
        }

        const invoiceCreateInput: Prisma.InvoiceCreateInput = {
            vendor_name: result.data.vendor_name,
            amount: result.data.amount,
            due_date: new Date(result.data.due_date),
            description: result.data.description,
            paid: result.data.paid,
            user: {
                connect: {
                    id: result.data.user_id,
                },
            },
        };
        return this.invoicesService.postInvoice(invoiceCreateInput);
    }

    @Get('/total')
    async getInvoicesTotal(@Query('due_date') due_date: string): Promise<number> {
        const result = getInvoicesTotalDto.safeParse({ due_date });
        if (!result.success) {
            throw new BadRequestException(result.error.errors);
        }
        return this.invoicesService.getInvoicesTotal(new Date(result.data.due_date));
    }
}