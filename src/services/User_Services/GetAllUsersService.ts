import { sectorRepository } from "../../repositories/Sector";
import { userRepository } from "../../repositories/User";

export async function GetAllUsersService () {
    const sector = await sectorRepository.findOneBy({ ID_Sector : 1 })
    const users = await userRepository.find({
        where : {
            Sector : sector
        }
    });

    return users
}