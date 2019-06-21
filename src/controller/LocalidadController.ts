import {getManager, UpdateResult, DeleteResult, getRepository} from 'typeorm';
import { localidad } from '../entity/localidad';
import {NextFunction, Request, Response} from "express";

export class LocalidadController {
    // crearEntidad(entidadNew: entidad): Promise<entidad>{
    //     return getManager().getRepository(entidad).save(entidadNew);
    // }

    // obtenerListaEntidades(): Promise<localidad[]>{
    //     return getManager().getRepository(localidad).createQueryBuilder('localidad')
    //     .select(['entidad.direccion', 'entidad.nombre', 'entidad.ruc_ci', 'entidad.telefono', 'entidad.localidad'])
    //     .getMany();
    // }

    private userRepository = getRepository(localidad);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }
}