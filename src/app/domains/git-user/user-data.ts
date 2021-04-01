import { Roles } from "./roles";

export interface UserData {
    avatarUrl: string;
    blog: string;
    roles: Array<Roles>
}