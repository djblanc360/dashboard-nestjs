
# Backend using NestJS, Fastify, Prisma ORM, and PostgreSQL

## Features
- replaced Express with Fastify for performance
- handles user authentication with JWT
- manages invoices y retrieving and sending invoices to the database
- included `POST /invoice` to easily add more invoices in POSTMAN
- limit of invoices is small to display pagination feature

## Dependencies

- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository
- [@nestjs/jwt](https://docs.nestjs.com/security/authentication#jwt-token) JWT utilities for authentication and authorization in NestJS applications
- [@nestjs/platform-fastify](https://docs.nestjs.com/techniques/performance) for using NestJS with the Fastify for enhanced performance
- [Prisma](https://www.prisma.io/docs) ORM for interacting with Supabase database
- [Supabase](https://supabase.com/docs) PostgreSQL database
- [Pino-pretty](https://www.npmjs.com/package/pino-pretty) formatter for Fastify logs
- [Bcrypt](https://www.npmjs.com/package/bcrypt) library for hashing and comparing passwords
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Zod](https://zod.dev) TypeScript schema validation

## Server Structure
```
dashboard-nestjs/
├── /server
│		├── /prisma
│		│    ├── schema.prisma              # defines models and datasource
│		│    └── seed.ts                    # data seeding for demo
│		├── /src
│		│    ├── app.module.ts              # main app module
│		│    ├── main.ts 
│		│    ├── /auth
│		│    │    ├── auth.controller.ts    # login route
│		│    │    ├── auth.service.ts       # handles authentication logic
│		│    │    ├── auth.module.ts        
│		│    │    ├── auth.dto.ts            # Zod DTO for validating auth-related data
│		│    │    └── constants.ts            # Zod DTO for validating auth data
│		│    ├── /invoices
│		│    │    ├── invoices.controller.ts # invoice data retrieval and creation
│		│    │    ├── invoices.service.ts    
│		│    │    ├── invoices.repository.ts 
│		│    │    ├── invoices.module.ts     
│		│    │    ├── invoices.dto.ts        # Zod DTO for validating invoicedata
│		│    │    └── pagination.middleware.ts  # invoice list pagination middleware
│		│    ├── /database
│		│    │    └── prisma.service.ts       # handle database connections
│		│    └── /types
│		│    │    ├── invoice.ts
│		│         └── user.ts
│		├── .env                             # Supabase URL, JWT, environment
│		├── package.json                     
│		├── tsconfig.json                    
│		├── prisma.config.js                 
│		├── docker-compose.yml               # Docker setup
│		└── README.md                       
		
```


## Usage

### Installation

```bash
$ npm install
```

### Run Options

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Seeding Database

while in the `server/` directory
```bash
$ npx prisma db seed
```


## Authors

* [@Daryl Blancaflor](djblanc360@gmail.com)

## Version History