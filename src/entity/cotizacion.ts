import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {moneda} from "./moneda";


@Entity("cotizacion",{schema:"redcobrosjp" } )
export class cotizacion {

   
    @OneToOne(type=>moneda, moneda=>moneda.cotizacion,{ primary:true, nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:moneda | null;


    @Column("character varying",{ 
        nullable:true,
        length:8,
        name:"abreviatura"
        })
    abreviatura:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"compra"
        })
    compra:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"venta"
        })
    venta:number | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_ult_update"
        })
    fecha_ult_update:Date | null;
        
}
