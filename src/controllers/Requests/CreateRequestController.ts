import { Request , Response} from 'express'
import { CreateRequestService } from '../../services/Request_Services/CreateRequestService';

export async function CreateRequestController(req : Request, res : Response) {
    const { Patrimony, Description , ID_User, Sector_Name } = req.body;

    const newRequest = await CreateRequestService(Patrimony, Description, ID_User, Sector_Name);

    res.status(201).json(newRequest)
}