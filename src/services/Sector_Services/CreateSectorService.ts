import { AlreadyExistsError } from "../../errors/AlreadyExistsError";
import { sectorRepository } from "../../repositories/Sector";


export async function CreateSectorService (name : string) {
    const sectorAlreadyExists = await sectorRepository.findOneBy({ Sector_Name : name })

    if(sectorAlreadyExists !== null) throw new AlreadyExistsError('Sector');

    const newSector = sectorRepository.create({Sector_Name : name});

    const createSector = sectorRepository.save(newSector)

    return createSector
}