import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from "../database/prisma.service";
import { Invoice, Prisma } from "@prisma/client";

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async getInvoices(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.InvoiceWhereUniqueInput;
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput;
  }): Promise<Invoice[]> {
    try {
      const { skip, take, cursor, where, orderBy } = params;
      return this.prisma.invoice.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
        include: { user: true },
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve invoices', error);
    }
  }

  async getInvoice(
    invoiceWhereUniqueInput: Prisma.InvoiceWhereUniqueInput,
  ): Promise<Invoice | null> {
    try {
      const invoice = this.prisma.invoice.findUnique({
        where: invoiceWhereUniqueInput,
        include: { user: true },
      });
      if (!invoice) {
        throw new NotFoundException('Invoice not found');
      }
      return invoice;
    } catch (error) {
      throw new NotFoundException('Failed to retrieve invoice', error);
    }
  }

  // adding this just for testing
  async postInvoice(
    data: Prisma.InvoiceCreateInput,
  ): Promise<Invoice> {
    try {
      return this.prisma.invoice.create({
        data,
      });
    } catch (error) {
      throw new BadRequestException('Failed to create invoice', error);
    }
  }

  async getInvoicesTotal(due_date: Date): Promise<number> {
    try {
      return this.prisma.invoice.aggregate({
        _sum: {
          amount: true,
        },
        where: {
          due_date: {
            gte: new Date(due_date),
          },
        },
      }).then((result) => result._sum.amount ?? 0);
    } catch (error) {
      throw new InternalServerErrorException('Failed to calculate total', error);
    }
  }
  
}