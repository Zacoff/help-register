import { plainToClass } from "class-transformer";
import { Request, Response } from "express";
import { User } from "../../entities/User";
import { GetSectorEmployeesService } from "../../services/Sector_Services/GetSectorEmployeesService";

export async function GetSectorEmployeesController (req : Request, res : Response) {
    const { Sector_Name } = req.body;
    const { id_sector } = req.params;

    let employess = await GetSectorEmployeesService(Sector_Name, Number(id_sector));

    employess = plainToClass(User, employess);

    res.status(200).json(employess);
}