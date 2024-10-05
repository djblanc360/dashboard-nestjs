
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Features

- seeding the database
- included POST invoices to easily add more invoices in POSTMAN
- limit of invoices is small to display pagination feature

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


## Authors

* [@Daryl Blancaflor](djblanc360@gmail.com)

## Version History