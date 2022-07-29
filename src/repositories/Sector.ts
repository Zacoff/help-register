import { Sector } from '../entities/Sector';
import { AppDataSource } from '../data-source';

export const sectorRepository = AppDataSource.getRepository(Sector);