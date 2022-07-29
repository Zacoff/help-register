import { Request , Response} from 'express'
import { UpdateStatusRequestService } from '../../services/Request_Services/UpdateStatusRequestService';

export async function UpdateStatusRequestController(req : Request, res : Response) {
    const { ID_Request } = req.body;

    const requestUpdate = await UpdateStatusRequestService(ID_Request)

    res.status(202).json(requestUpdate)
}