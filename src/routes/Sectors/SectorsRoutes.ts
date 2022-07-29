import { Router } from 'express'; 
import { CreateSectorController } from '../../controllers/Sectors/CreateSectorController';
import { GetAllSectorsController } from '../../controllers/Sectors/GetAllSectorsController';
import { GetOneSectorsController } from '../../controllers/Sectors/GetOneSectorController';
import { GetSectorEmployeesController } from '../../controllers/Sectors/GetSectorEmployeesController';
import { GetSectorRequestsController } from '../../controllers/Sectors/GetSectorRequestsController';

const sectorRouter = Router()

sectorRouter
.post('/sector/createSector', CreateSectorController)
.get('/sector/getAllSectors', GetAllSectorsController)
.get('/sector/getOneSector', GetOneSectorsController)
.get('/sector/:id_sector/employess', GetSectorEmployeesController)
.get('/sector/:id_sector/requests', GetSectorRequestsController)

export { sectorRouter }

