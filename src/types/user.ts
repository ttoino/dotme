import { CV, portfolio_entry } from "./cv";
import { Template } from "./template";

export interface User {
    email: string;
    portfolio: CV;
    portfolio_entries?: portfolio_entry[];
    templates: Template[];
}
