import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {red} from "./red";
import {servicio} from "./servicio";
import {tipo_cobro} from "./tipo_cobro";
import {dist_clearing_fact} from "./dist_clearing_fact";


@Entity("clearing_facturador",{schema:"redcobrosjp" } )
export class clearing_facturador {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_clearing_facturador"
        })
    id_clearing_facturador:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha"
        })
    fecha:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_acreditacion"
        })
    fecha_acreditacion:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora_creacion"
        })
    fecha_hora_creacion:Date;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto_total"
        })
    monto_total:number;
        

   
    @ManyToOne(type=>red, red=>red.clearingFacturadors,{  nullable:false, })
    @JoinColumn({ name:'red'})
    red:red | null;


   
    @ManyToOne(type=>servicio, servicio=>servicio.clearingFacturadors,{  nullable:false, })
    @JoinColumn({ name:'servicio'})
    servicio:servicio | null;


   
    @ManyToOne(type=>tipo_cobro, tipo_cobro=>tipo_cobro.clearingFacturadors,{  nullable:false, })
    @JoinColumn({ name:'tipo_cobro'})
    tipoCobro:tipo_cobro | null;


   
    @OneToMany(type=>dist_clearing_fact, dist_clearing_fact=>dist_clearing_fact.clearingFacturador)
    distClearingFacts:dist_clearing_fact[];
    
}
