import { plainToClass } from "class-transformer";
import { Request, Response } from "express";
import { User } from "../../entities/User";
import { GetAllUsersService } from "../../services/User_Services/GetAllUsersService";

export async function GetAllUsersController (req : Request, res : Response) {
    let users = await GetAllUsersService();

    users = plainToClass(User, users)

    res.status(200).json(users);
}