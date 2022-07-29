import { plainToClass } from "class-transformer";
import { User } from "../../entities/User";
import { NotExistsError } from "../../errors/NotExists";
import { requestRepository } from "../../repositories/Request";
import { sectorRepository } from "../../repositories/Sector";
import { userRepository } from "../../repositories/User";

export async function CreateRequestService(Patrimony : string, Description : string, ID_User : string, Sector_Name : string) {
    const user = await userRepository.findOneBy({ ID_User : ID_User});
    if(user === null) throw new NotExistsError('User');

    const sector = await sectorRepository.findOneBy({ Sector_Name : Sector_Name });
    if(sector === null) throw new NotExistsError('Sector');

    const Request_Date = new Date(Date.now()).toString() as string;

    const userWithOutPassword = plainToClass(User, user);

    const newRequest = requestRepository.create({ Patrimony: Patrimony, Description : Description, Request_Date : Request_Date,  User : userWithOutPassword, Sector : sector, Status : 'open'});

    const createRequest = requestRepository.save(newRequest);

    return createRequest
}