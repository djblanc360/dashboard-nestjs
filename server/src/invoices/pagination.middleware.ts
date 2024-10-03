import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply, next: () => void) {
    const { page = '1', limit = '3' } = req.query as Record<string, string>;

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    (req.query as Record<string, any>).page = pageNumber;
    (req.query as Record<string, any>).limit = limitNumber;

    next();
  }
}
