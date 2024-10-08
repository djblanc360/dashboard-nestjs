import { Injectable, UnauthorizedException } from '@nestjs/common';
import  { PrismaService } from '../database/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/types/user';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) {}

    async login(
        email: string,
        password: string,
    ): Promise<{ token: string, account: User }> {
        const user = await this.prisma.user.findUnique({
            where: { email },
            include: { invoices: true },
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new UnauthorizedException('Invalid password');
        }

        const payload = {
            id: user.id,
            name: user.name ?? '',
            email: user.email,
            invoices: user.invoices.map(invoice => ({
                id: invoice.id,
                vendor_name: invoice.vendor_name,
                amount: invoice.amount,
                due_date: invoice.due_date,
                description: invoice.description,
                user_id: invoice.user_id,
                paid: invoice.paid,
            })),
        };

        return {
            token: await this.jwtService.signAsync({ id: user.id, email: user.email }),
            account: payload
        };
    }
}
