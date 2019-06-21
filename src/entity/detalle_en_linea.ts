import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_carrier} from "./servicio_carrier";
import {transaccion_rc} from "./transaccion_rc";


@Entity("detalle_en_linea",{schema:"redcobrosjp" } )
export class detalle_en_linea {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_detalle_en_linea"
        })
    id_detalle_en_linea:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_ingreso"
        })
    fecha_ingreso:Date;
        

    @Column("smallint",{ 
        nullable:false,
        name:"id_servicio_carrier"
        })
    id_servicio_carrier:number;
        

   
    @ManyToOne(type=>servicio_carrier, servicio_carrier=>servicio_carrier.detalleEnLineas,{  nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:servicio_carrier | null;


   
    @ManyToOne(type=>transaccion_rc, transaccion_rc=>transaccion_rc.detalleEnLineas,{  nullable:false, })
    @JoinColumn({ name:'id_transaccion'})
    idTransaccion:transaccion_rc | null;


    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_respuesta"
        })
    fecha_respuesta:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"cod_autorizacion"
        })
    cod_autorizacion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:3000,
        name:"mensaje_enviado"
        })
    mensaje_enviado:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:3000,
        name:"mensaje_recibido"
        })
    mensaje_recibido:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"id_respuesta_carrier"
        })
    id_respuesta_carrier:string | null;
        

   
    @ManyToOne(type=>servicio_carrier, servicio_carrier=>servicio_carrier.detalleEnLineas2,{  nullable:false, })
    @JoinColumn({ name:'id_tipo_operacion'})
    idTipoOperacion:servicio_carrier | null;

}
