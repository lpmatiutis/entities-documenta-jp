import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";
import {moneda} from "./moneda";


@Entity("servicio_moneda",{schema:"redcobrosjp" } )
export class servicio_moneda {

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.servicioMonedas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'servicio'})
    servicio:servicio_rc | null;


   
    @ManyToOne(type=>moneda, moneda=>moneda.servicioMonedas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:moneda | null;


    @Column("character",{ 
        nullable:true,
        default: () => "'S'",
        name:"soportado"
        })
    soportado:string | null;
        
}
