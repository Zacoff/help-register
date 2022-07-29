import { NotExistsError } from "../../errors/NotExists";
import { sectorRepository } from "../../repositories/Sector";

interface ISector {
    ID_Sector : number,
    Sector_Name : string
}

export async function GetSectorRequestsService (Sector_Name? : string | undefined, ID_Sector? : number | undefined) {
    
    let sector : ISector;

    if(Sector_Name !== undefined) sector = await sectorRepository.findOneBy({ Sector_Name : Sector_Name })
    if(ID_Sector !== undefined) sector = await sectorRepository.findOneBy({ ID_Sector : ID_Sector })

    if(sector === null) throw new NotExistsError('Sector');

    const sectorRequests = await sectorRepository.find({
        where : sector,
        relations : {
            requests : true
        }
    })

    const requests = sectorRequests[0].requests

    return requests
}
