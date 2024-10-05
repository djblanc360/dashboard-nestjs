
## Description




## Features

- an unidentified user attempting to view `/invoices` is redirected to `login/`
- when the user logs in as is identified, they will be redirected to `/invoices`

## Client Structure
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
├── README.md                        
└── .gitignore                      
```


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


## Authors

* [@Daryl Blancaflor](djblanc360@gmail.com)

## Version History