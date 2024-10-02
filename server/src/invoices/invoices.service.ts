import { Injectable } from '@nestjs/common';
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
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.invoice.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: { user: true },
    });
  }

  async getInvoice(
    invoiceWhereUniqueInput: Prisma.InvoiceWhereUniqueInput,
  ): Promise<Invoice | null> {
    return this.prisma.invoice.findUnique({
      where: invoiceWhereUniqueInput,
      include: { user: true },
    });
  }

  // adding this just for testing
  async postInvoice(
    data: Prisma.InvoiceCreateInput,
  ): Promise<Invoice> {
    return this.prisma.invoice.create({
      data,
    });
  }

  async getInvoicesTotal(due_date: Date): Promise<number> {
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
  }
  
}