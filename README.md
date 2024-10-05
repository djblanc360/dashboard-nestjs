Full Stack Dasboard

## Application Structure
```
dashboard-nestjs/
├── client/                          # react frontend
│   ├── public/                      
│   ├── src/
│   │   ├── components/
│   │   │   ├── Account.tsx         # logged in user state
│   │   │   ├── InvoiceList.tsx     # list of invoices
│   │   │   ├── InvoiceModal.tsx    # modal for an invoice
│   │   │   ├── Login.tsx           # logged out user state
│   │   │   └── Navbar.tsx  	      
│   │   ├── pages/                  # views/pages
│   │   │   ├──  HomePage.tsx
│   │   │   ├──  InvoicesPage.tsx
│   │   │   └──  LoginPage.tsx
│   │   ├── hooks/                   # custom react hooks
│   │   ├── services/                # api calls to backend
│   │   │   ├── invoiceService.ts
│   │   │   └── loginService.ts
│   │   ├── store/                   # redux store for global state
│   │   │   ├── authSlice.ts         # user authentication, store user data
│   │   │   ├── hooks.ts             # typed versions of useDispatch & useSelector
│   │   │   ├── index.ts             # sets up store, state and dispatch
│   │   │   └── invoiceSlice.ts      # updae selected invoice, access invoices
│   │   ├── types/                   # shared typeScript types
│   │   │   ├── invoice.ts
│   │   │   ├── user.ts.
│   │   ├── utils/                   # utility functions   
│   │   ├── App.tsx                  # main app component
│   │   ├── main.tsx                 # entry point for React
│   │   ├──vite-env.d.ts       
│   │   └── index.css                # tailwind  
│   ├── index.html
│   ├── package.json                 
│   ├── tsconfig.json                # typeScript configuration
│   └── vite.config.ts               # vite configuration
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
├── README.md                        
└── .gitignore                      
```

___

# Frontend using React, Vite, Tailwind and MUI

## Features
- displays a paginated list of invoices
- handles user interactions such as logging in and viewing invoice details
- manages user authentication
- an unidentified user attempting to view `/invoices` is redirected to `login/`
- when the user logs in as is identified, they will be redirected to `/invoices`

## Dependencies

- [@mui/icons-material](https://mui.com/material-ui/material-icons/)  - Material UI icons
- [@mui/material](https://mui.com/x/introduction/)  - Material UI components like modal
- [@mui/x-data-grid](https://mui.com/x/react-data-grid/getting-started/#installation) - Material U data grid component for managing tables
- [@rollup/plugin-alias](https://www.npmjs.com/package/@rollup/plugin-alias) - Rollup plugin for aliasing module imports
- [React-Query](https://tanstack.com/query/latest/docs/framework/react/typescript) - for fetching, caching, and updating asynchronous data
- [React-Redux](https://react-redux.js.org/using-react-redux/usage-with-typescript#define-typed-hooks) - for to connecting components to the Redux store
- [Redux-Toolkit](https://redux-toolkit.js.org/) - Redux logic to manage state with Redux
- [React-Router](https://reactrouter.com/en/main/router-components/browser-router) - routing for for navigation between pages
- [Tailwindcss](https://tailwindcss.com) utility-first CSS framework
- [Zod](https://zod.dev) TypeScript schema validation

## Usage

### Installation

```bash
$ npm install
```

### Run Options

```bash
# development
$ npm run dev
```

### Test Users
email: peacelily@seed.com
password: test1234

email: monstera+albo@seed.com
password: test7777

email: basil@seed.com
password: test5678

## Authors

* [@Daryl Blancaflor](djblanc360@gmail.com)

## Version History


___


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

### Postman Query Examples

Retrieve all invoices:
`GET http://localhost:3000/invoices?page=1&limit=5`
or
`GET http://localhost:3000/invoices`

Retrieve an invoice:
`GET http://localhost:3000/invoices/3`

Invoice total by date:
`GET http://localhost:3000/invoices/total?due_date=2024-10-08`

Create an invoice for existing user:
`POST http://localhost:3000/invoices`
```json
{
  "vendor_name": "Post test",
  "amount": 10.00,
  "due_date": "2024-10-09",
  "description": "testing new vendor",
  "user_id": 3,  // Basil
  "paid": false
}
```

User login:
`POST http://localhost:3000/auth/login`
```json
{
    "email": "peacelily@seed.com",
    "password": "test1234"
}
```

## Authors

* [@Daryl Blancaflor](djblanc360@gmail.com)

## Version History