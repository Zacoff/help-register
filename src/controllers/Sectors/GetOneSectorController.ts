import { Request, Response } from "express";
import { GetOneSectorsService } from "../../services/Sector_Services/GetOneSectorService";

export async function GetOneSectorsController (req : Request, res : Response) {
    const { Sector_Name, ID_Sector } = req.body;

    const sectors = await GetOneSectorsService(Sector_Name, ID_Sector);

    res.status(200).json(sectors);
}