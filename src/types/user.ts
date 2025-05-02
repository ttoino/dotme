import { CV, portfolio_entry } from "./cv";

export interface User {
    email: string;
    portfolio: CV;
    portfolio_entries?: portfolio_entry[];
}
