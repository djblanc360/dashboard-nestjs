import { Module, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { InvoicesController } from "./invoices.controller";
import { InvoicesService } from "./invoices.service";
import { PrismaService } from "../database/prisma.service";
import { PaginationMiddleware } from "./pagination.middleware";

@Module({
    imports: [],
    controllers: [InvoicesController],
    providers: [InvoicesService, PrismaService ],
})
export class InvoicesModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(PaginationMiddleware)
        .forRoutes({ path: 'invoices', method: RequestMethod.GET });
    }
}