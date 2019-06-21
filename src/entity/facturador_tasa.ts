import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";
import {moneda} from "./moneda";


@Entity("facturador_tasa",{schema:"redcobrosjp" } )
export class facturador_tasa {

   
    @ManyToOne(type=>facturador, facturador=>facturador.facturadorTasas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'facturador'})
    facturador:facturador | null;


   
    @ManyToOne(type=>moneda, moneda=>moneda.facturadorTasas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:moneda | null;


    @Column("integer",{ 
        nullable:false,
        name:"tasa"
        })
    tasa:number;
        
}
