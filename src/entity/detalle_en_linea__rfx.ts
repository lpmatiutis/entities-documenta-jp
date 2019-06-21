import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("detalle_en_linea__rfx",{schema:"redcobrosjp" } )
@Index("idx_det_linea__rfx_error",["trg_iderror",])
export class detalle_en_linea__rfx {

    @Column("bigint",{ 
        nullable:false,
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
        

    @Column("integer",{ 
        nullable:false,
        name:"id_servicio"
        })
    id_servicio:number;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_transaccion"
        })
    id_transaccion:string;
        

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
        

    @Column("smallint",{ 
        nullable:false,
        name:"id_tipo_operacion"
        })
    id_tipo_operacion:number;
        

    @Column("character",{ 
        nullable:true,
        name:"trg_action"
        })
    trg_action:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"trg_user"
        })
    trg_user:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"trg_time"
        })
    trg_time:Date | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:38,
        scale:0,
        name:"trg_id"
        })
    trg_id:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:38,
        scale:0,
        name:"trg_iderror"
        })
    trg_iderror:string | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"trg_slave"
        })
    trg_slave:number | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"trg_counterror"
        })
    trg_counterror:number | null;
        
}
