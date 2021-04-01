import { TokenData } from "./token-data";
import { UserData } from "./user-data";

export interface GithubUser {
    tokenData: TokenData;
    userData: UserData;
}