import { Resquest } from '../entities/Request';
import { AppDataSource } from '../data-source';

export const requestRepository = AppDataSource.getRepository(Resquest);