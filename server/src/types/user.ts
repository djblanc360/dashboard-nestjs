import { Invoice } from './invoice';

export interface User {
    id: number;
    email: string;
    name: string | null;
    invoices: Invoice[];
}
