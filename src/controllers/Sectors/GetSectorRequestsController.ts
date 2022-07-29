import { Request, Response } from "express";
import { GetSectorEmployeesService } from "../../services/Sector_Services/GetSectorEmployeesService";
import { GetSectorRequestsService } from "../../services/Sector_Services/GetSectorRequestsService";

export async function GetSectorRequestsController (req : Request, res : Response) {
    const { Sector_Name } = req.body;
    const { id_sector } = req.params;

    const requests = await GetSectorRequestsService(Sector_Name, Number(id_sector));

    res.status(200).json(requests);
}