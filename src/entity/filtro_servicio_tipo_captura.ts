import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";
import {tipo_captura} from "./tipo_captura";


@Entity("filtro_servicio_tipo_captura",{schema:"redcobrosjp" } )
export class filtro_servicio_tipo_captura {

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.filtroServicioTipoCapturas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:servicio_rc | null;


   
    @ManyToOne(type=>tipo_captura, tipo_captura=>tipo_captura.filtroServicioTipoCapturas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_tipo_captura'})
    idTipoCaptura:tipo_captura | null;


    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"descripcion"
        })
    descripcion:string | null;
        
}
