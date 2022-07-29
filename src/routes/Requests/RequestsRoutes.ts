import { Router } from "express";
import { CreateRequestController } from "../../controllers/Requests/CreateRequestController";
import { UpdateStatusRequestController } from "../../controllers/Requests/UpdateStatusRequestController";

const requestRouter = Router();

requestRouter
.post('/request/createRequest', CreateRequestController)
.put('/request/updateStatus', UpdateStatusRequestController)
export { requestRouter }