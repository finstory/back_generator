import { UUID } from "crypto";

export class UserDto {
    id?: UUID | string;
    first_name: string;
    password: string;
    age: number;
}