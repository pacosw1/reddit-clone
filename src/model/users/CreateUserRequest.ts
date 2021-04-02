import { Expose } from 'class-transformer';
import { IsEmail, IsString, MaxLength, MinLength, minLength } from 'class-validator';

export class CreateUserRequest {
    @IsString()
    @MinLength(5)
    @MaxLength(10)
    @Expose()
    username: string
    @Expose()
    @IsEmail()
    email: string
    @Expose()
    @IsString()
    password: string

    constructor(username: string, email: string, password: string) {
        this.email = email
        this.username = username
        this.password = password
    }
}

const userRequest = new CreateUserRequest("pacosw", "pacosw@gmail.com", "password");