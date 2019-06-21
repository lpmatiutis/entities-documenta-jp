import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {recaudador} from "./recaudador";
import {servicio_rc} from "./servicio_rc";
import {moneda} from "./moneda";


@Entity("limite_trx_servicio",{schema:"redcobrosjp" } )
export class limite_trx_servicio {

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.limiteTrxServicios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'recaudador'})
    recaudador:recaudador | null;


   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.limiteTrxServicios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'servicio'})
    servicio:servicio_rc | null;


   
    @ManyToOne(type=>moneda, moneda=>moneda.limiteTrxServicios,{  nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:moneda | null;


    @Column("bigint",{ 
        nullable:false,
        name:"limite"
        })
    limite:string;
        
}
