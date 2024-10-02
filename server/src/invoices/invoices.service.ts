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
    });
  }

  async getInvoice(
    invoiceWhereUniqueInput: Prisma.InvoiceWhereUniqueInput,
  ): Promise<Invoice | null> {
    return this.prisma.invoice.findUnique({
      where: invoiceWhereUniqueInput,
    });
  }
  
}