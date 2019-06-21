import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("boleta_pago_contrib__rfx",{schema:"redcobrosjp" } )
export class boleta_pago_contrib__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_boleta_pago_contrib"
        })
    id_boleta_pago_contrib:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"codigo_hash"
        })
    codigo_hash:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"consecutivo"
        })
    consecutivo:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_cobro"
        })
    fecha_cobro:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora_recepcion"
        })
    fecha_hora_recepcion:Date;
        

    @Column("bigint",{ 
        nullable:false,
        name:"formulario"
        })
    formulario:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"numero_orden"
        })
    numero_orden:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_resolucion"
        })
    numero_resolucion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"periodo"
        })
    periodo:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"pos_grupo"
        })
    pos_grupo:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"total"
        })
    total:number;
        

    @Column("bigint",{ 
        nullable:false,
        name:"version"
        })
    version:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"contribuyente"
        })
    contribuyente:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"form_contrib"
        })
    form_contrib:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"grupo"
        })
    grupo:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"impuesto"
        })
    impuesto:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_ot"
        })
    numero_ot:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"transaccion"
        })
    transaccion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"ruc"
        })
    ruc:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"dv"
        })
    dv:string | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"flg_pago_online"
        })
    flg_pago_online:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_ot2"
        })
    numero_ot2:string | null;
        

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
        default: () => "0",
        name:"trg_counterror"
        })
    trg_counterror:number | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"trg_slave"
        })
    trg_slave:number | null;
        
}
