export interface Invoice {
    id: number;
    vendor_name: string;
    amount: number;
    due_date: string;
    description: string | null;
    user_id: number;
    paid: boolean;
}