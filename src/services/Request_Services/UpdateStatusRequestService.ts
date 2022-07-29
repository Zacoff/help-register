import { requestRepository } from "../../repositories/Request";



export async function UpdateStatusRequestService(ID_Request : string) {

    const Solution_Date = new Date(Date.now()).toString() as string;

    await requestRepository.update(ID_Request, { Status : 'closed', Solution_Date :  Solution_Date });

    return { ID_Request : ID_Request , Status : 'Closed' }
}