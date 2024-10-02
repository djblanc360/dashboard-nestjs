import { Module } from "@nestjs/common";
import { InvoicesController } from "./invoices.controller";
import { InvoicesService } from "./invoices.service";
import { PrismaService } from "../database/prisma.service";

@Module({
    imports: [],
    controllers: [InvoicesController],
    providers: [InvoicesService, PrismaService ],
})
export class InvoicesModule {}