import * as V from "class-validator";

export class UserDto {

    @V.IsAlpha("en-US", { message: "El nombre solo puede contener letras." })
    @V.Length(3, 20, { message: "El nombre debe tener entre 3 y 20 caracteres." })
    name: string;
}
