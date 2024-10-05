import { Invoice } from "./invoice";

export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    invoices: Invoice[];
    token: string;
}