
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