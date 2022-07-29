import { plainToClass } from 'class-transformer';
import { Request, Response } from 'express'
import { User } from '../../entities/User';
import { CreateUserService } from '../../services/User_Services/CreateUserService';
 
export async function CreateUserController (req : Request, res : Response) {
    const { name , email , password , ID_Sector } = req.body;
    let newUser = await CreateUserService(name , email , password , ID_Sector);

    newUser = plainToClass(User, newUser)

    res.status(201).json(newUser);
}