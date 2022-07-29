import { NotExistsError } from "../../errors/NotExists";
import { sectorRepository } from "../../repositories/Sector";

interface ISector {
    ID_Sector : number,
    Sector_Name : string
}

export async function GetOneSectorsService (Sector_Name? : string | undefined, ID_Sector? : number | undefined) {
    
    let sectors : ISector;

    if(Sector_Name !== undefined) sectors = await sectorRepository.findOneBy({ Sector_Name : Sector_Name })
    if(ID_Sector !== undefined) sectors = await sectorRepository.findOneBy({ ID_Sector : ID_Sector })

    if(sectors === null) throw new NotExistsError('Sector');

    return sectors
}