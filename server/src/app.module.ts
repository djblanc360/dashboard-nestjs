import { Module } from '@nestjs/common';
import { InvoicesModule } from './invoices/invoices.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [InvoicesModule, AuthModule],
})
export class AppModule {}
