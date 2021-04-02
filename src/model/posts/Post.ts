import { IsNumber, IsString, Length } from 'class-validator';

export class Post {
    @IsString()
    @Length(10, 30)
    title: string
    @IsString()
    @Length(10, 500)
    body: string
    @IsNumber()
    createdAt: Date
    @IsNumber()
    points: number
    @IsString()
    @Length(10, 15)
    username: string

    constructor(title: string, username: string, body: string, createdAt: Date, points: number) {
        this.title = title;
        this.body = body;
        this.createdAt = createdAt;
        this.points = points;
        this.username = username;
    }
}