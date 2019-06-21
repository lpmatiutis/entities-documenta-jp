import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {config_clearing_servicio} from "./config_clearing_servicio";
import {recaudador} from "./recaudador";
import {sucursal} from "./sucursal";
import {config_comisional_detalle} from "./config_comisional_detalle";
import {distribucion_clearing} from "./distribucion_clearing";


@Entity("configuracion_comisional",{schema:"redcobrosjp" } )
export class configuracion_comisional {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_configuracion_comisional"
        })
    id_configuracion_comisional:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"habilitado"
        })
    habilitado:string;
        

   
    @ManyToOne(type=>config_clearing_servicio, config_clearing_servicio=>config_clearing_servicio.configuracionComisionals,{  nullable:false, })
    @JoinColumn({ name:'config_clearing_servicio'})
    configClearingServicio:config_clearing_servicio | null;


   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.configuracionComisionals,{  })
    @JoinColumn({ name:'recaudador'})
    recaudador:recaudador | null;


   
    @ManyToOne(type=>sucursal, sucursal=>sucursal.configuracionComisionals,{  })
    @JoinColumn({ name:'sucursal'})
    sucursal:sucursal | null;


   
    @OneToMany(type=>config_comisional_detalle, config_comisional_detalle=>config_comisional_detalle.configuracionComisional)
    configComisionalDetalles:config_comisional_detalle[];
    

   
    @OneToMany(type=>distribucion_clearing, distribucion_clearing=>distribucion_clearing.configuracionComisional)
    distribucionClearings:distribucion_clearing[];
    
}
