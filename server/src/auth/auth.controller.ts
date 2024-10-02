import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto, LoginDto } from './auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() body: LoginDto) {
        const result = loginDto.safeParse(body);
        if (!result.success) {
            throw new BadRequestException(result.error.errors);
        }
        return this.authService.login(result.data.email, result.data.password);
    }
}
