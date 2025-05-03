import { CV } from "./cv";
import { Template } from "./template";

export interface User {
    email: string;
    portfolio: CV;
    templates: Template[];
}
