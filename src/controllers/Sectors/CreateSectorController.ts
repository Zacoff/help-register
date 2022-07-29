import { Request, Response } from 'express'
import { CreateSectorService } from '../../services/Sector_Services/CreateSectorService';
 
export async function CreateSectorController (req : Request, res : Response) {
    const { name } = req.body;
    const newSector = await CreateSectorService(name);
    res.status(201).json(newSector);
}