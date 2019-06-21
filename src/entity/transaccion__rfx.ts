import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("transaccion__rfx",{schema:"redcobrosjp" } )
@Index("idx_transaccion__rfx_error",["trg_iderror",])
export class transaccion__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_transaccion"
        })
    id_transaccion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"certificacion"
        })
    certificacion:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"codigo_transaccional"
        })
    codigo_transaccional:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"comentario"
        })
    comentario:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_cheque"
        })
    fecha_cheque:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora_red"
        })
    fecha_hora_red:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora_sistema"
        })
    fecha_hora_sistema:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora_terminal"
        })
    fecha_hora_terminal:Date;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"flag_anulado"
        })
    flag_anulado:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"monto_total"
        })
    monto_total:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"numero_cheque"
        })
    numero_cheque:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"posicion_gestion"
        })
    posicion_gestion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"ticket"
        })
    ticket:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"entidad_financiera"
        })
    entidad_financiera:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"estado_transaccion"
        })
    estado_transaccion:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"gestion"
        })
    gestion:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"moneda"
        })
    moneda:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"tipo_pago"
        })
    tipo_pago:string | null;
        

    @Column("character",{ 
        nullable:true,
        name:"migrado"
        })
    migrado:string | null;
        

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
