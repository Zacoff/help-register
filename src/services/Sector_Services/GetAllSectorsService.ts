import { sectorRepository } from "../../repositories/Sector";

export async function GetAllSectorsService () {
    const sectors = sectorRepository.find()

    return sectors
}