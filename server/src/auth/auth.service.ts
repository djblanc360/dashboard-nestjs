import { Injectable, UnauthorizedException } from '@nestjs/common';
import  { PrismaService } from '../database/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) {}

    async login(
        email: string,
        password: string,
    ): Promise<{ token: string }> {
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new UnauthorizedException('Invalid password');
        }
        const payload = { id: user.id, name: user.name, email: user.email };

        return {
            token: await this.jwtService.signAsync(payload),
        };
    }
}
