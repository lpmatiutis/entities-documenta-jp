import {getManager, UpdateResult, DeleteResult, getRepository} from 'typeorm';
import { entidad } from '../entity/entidad';
import {NextFunction, Request, Response} from "express";

export class EntidadController {
    crearEntidad(entidadNew: entidad): Promise<entidad>{
        return getManager().getRepository(entidad).save(entidadNew);
    }

    obtenerListaEntidades(): Promise<entidad[]>{
        return getManager().getRepository(entidad).createQueryBuilder('entidad')
        .select(['entidad.direccion', 'entidad.nombre', 'entidad.ruc_ci', 'entidad.telefono', 'entidad.localidad'])
        .getMany();
    }

    private entidadRepository = getRepository(entidad);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.entidadRepository.find();
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.entidadRepository.save(request.body);
    }

    async edit(request: Request, response: Response, next: NextFunction) {
        return this.entidadRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction){
        let entidadUpdate = await this.entidadRepository.findOne(request.params.id);
        await this.entidadRepository.save(entidadUpdate);
    }

}