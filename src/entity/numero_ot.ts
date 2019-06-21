import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {red} from "./red";
import {tipo_pago} from "./tipo_pago";
import {boleta_pago_contrib} from "./boleta_pago_contrib";


@Entity("numero_ot",{schema:"redcobrosjp" } )
export class numero_ot {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_numero_ot"
        })
    id_numero_ot:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"era_numero_ot_dv"
        })
    era_numero_ot_dv:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha"
        })
    fecha:Date;
        

    @Column("bigint",{ 
        nullable:false,
        name:"numero"
        })
    numero:string;
        

   
    @ManyToOne(type=>red, red=>red.numeroOts,{  nullable:false, })
    @JoinColumn({ name:'red'})
    red:red | null;


   
    @ManyToOne(type=>tipo_pago, tipo_pago=>tipo_pago.numeroOts,{  nullable:false, })
    @JoinColumn({ name:'tipo_pago'})
    tipoPago:tipo_pago | null;


    @Column("smallint",{ 
        nullable:true,
        name:"lote"
        })
    lote:number | null;
        

   
    @OneToMany(type=>boleta_pago_contrib, boleta_pago_contrib=>boleta_pago_contrib.numeroOt)
    boletaPagoContribs:boleta_pago_contrib[];
    
}
