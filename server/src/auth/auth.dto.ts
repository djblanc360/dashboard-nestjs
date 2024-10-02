import { z } from 'zod';

const Login = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})