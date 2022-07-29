import { Request, Response } from "express";
import { GetAllSectorsService } from "../../services/Sector_Services/GetAllSectorsService";

export async function GetAllSectorsController (req : Request, res : Response) {
    const sectors = await GetAllSectorsService();

    res.status(200).json(sectors);
}