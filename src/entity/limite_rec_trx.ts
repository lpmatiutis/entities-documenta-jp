import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {moneda} from "./moneda";


@Entity("limite_rec_trx",{schema:"redcobrosjp" } )
export class limite_rec_trx {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"recaudador"
        })
    recaudador:string;
        

   
    @ManyToOne(type=>moneda, moneda=>moneda.limiteRecTrxs,{ primary:true, nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:moneda | null;


    @Column("timestamp without time zone",{ 
        nullable:false,
        primary:true,
        name:"fecha"
        })
    fecha:Date;
        

    @Column("bigint",{ 
        nullable:true,
        name:"monto"
        })
    monto:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"tasa"
        })
    tasa:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"limite"
        })
    limite:string | null;
        
}
