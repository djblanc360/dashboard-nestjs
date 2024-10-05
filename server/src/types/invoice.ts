export interface Invoice {
    id?: number;
    vendor_name: string;
    amount: number;
    due_date: Date;
    description?: string | null;
    user_id: number;
    paid: boolean;
}