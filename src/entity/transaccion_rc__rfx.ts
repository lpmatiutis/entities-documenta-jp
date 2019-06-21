import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("transaccion_rc__rfx",{schema:"redcobrosjp" } )
@Index("idx_transaccion_rc__rfx_trg_id",["trg_id","trg_slave",])
@Index("idx_transaccion_rc__rfx_error",["trg_iderror",])
export class transaccion_rc__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_transaccion"
        })
    id_transaccion:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"id_servicio"
        })
    id_servicio:number;
        

    @Column("smallint",{ 
        nullable:false,
        name:"id_tipo_operacion"
        })
    id_tipo_operacion:number;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_gestion"
        })
    id_gestion:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_estado_transaccion"
        })
    id_estado_transaccion:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"nro_boleta"
        })
    nro_boleta:number;
        

    @Column("character",{ 
        nullable:false,
        name:"anulado"
        })
    anulado:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"referencia_pago"
        })
    referencia_pago:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto"
        })
    monto:number | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_tipo_pago"
        })
    id_tipo_pago:string;
        

    @Column("smallint",{ 
        nullable:false,
        name:"id_tipo_captura"
        })
    id_tipo_captura:number;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_ingreso"
        })
    fecha_ingreso:Date;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"comision"
        })
    comision:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"id_corte"
        })
    id_corte:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:120,
        name:"referencia_consulta"
        })
    referencia_consulta:string | null;
        

    @Column("character",{ 
        nullable:true,
        name:"notificado"
        })
    notificado:string | null;
        

    @Column("character",{ 
        nullable:true,
        name:"migrado"
        })
    migrado:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"tasa"
        })
    tasa:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"moneda"
        })
    moneda:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"server"
        })
    server:string | null;
        

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
