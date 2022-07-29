import { AlreadyExistsError } from "../../errors/AlreadyExistsError";
import { userRepository } from "../../repositories/User";
import { hash } from 'bcryptjs'
import { sectorRepository } from "../../repositories/Sector";
import { NotExistsError } from "../../errors/NotExists";

export async function CreateUserService (name : string , email : string , password : string , ID_Sector : number ) {
        
    const userAlreadyExists = await userRepository.findOneBy({ Email : email })

    if(userAlreadyExists !== null) throw new AlreadyExistsError('User');
    
    const sector = await sectorRepository.findOneBy({ ID_Sector : ID_Sector })

    if(sector === null) throw new NotExistsError('Sector');

    const passwordHash = await hash(password, 8)

    const newSector = userRepository.create({ Name : name, Email : email, Password : passwordHash, Sector : sector });

    const createSector = userRepository.save(newSector)

    return createSector
}