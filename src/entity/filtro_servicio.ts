import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {red} from "./red";
import {recaudador} from "./recaudador";
import {sucursal} from "./sucursal";
import {terminal} from "./terminal";
import {servicio_rc} from "./servicio_rc";


@Entity("filtro_servicio",{schema:"redcobrosjp" } )
export class filtro_servicio {

   
    @ManyToOne(type=>red, red=>red.filtroServicios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_red'})
    idRed:red | null;


   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.filtroServicios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_recaudador'})
    idRecaudador:recaudador | null;


   
    @ManyToOne(type=>sucursal, sucursal=>sucursal.filtroServicios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_sucursal'})
    idSucursal:sucursal | null;


   
    @ManyToOne(type=>terminal, terminal=>terminal.filtroServicios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_terminal'})
    idTerminal:terminal | null;


   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.filtroServicios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:servicio_rc | null;

}
