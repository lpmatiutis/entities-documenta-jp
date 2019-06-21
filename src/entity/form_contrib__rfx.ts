import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("form_contrib__rfx",{schema:"redcobrosjp" } )
export class form_contrib__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_form_contrib"
        })
    id_form_contrib:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"campos_validos"
        })
    campos_validos:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:1,
        name:"certificado"
        })
    certificado:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"codigo_hash"
        })
    codigo_hash:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"consecutivo"
        })
    consecutivo:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"digito_verificador"
        })
    digito_verificador:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        name:"enviado"
        })
    enviado:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_certificado_set"
        })
    fecha_certificado_set:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_controlado"
        })
    fecha_controlado:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_hora_real_certificado"
        })
    fecha_hora_real_certificado:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora_recepcion"
        })
    fecha_hora_recepcion:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_presentacion"
        })
    fecha_presentacion:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_recibido"
        })
    fecha_recibido:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_orden"
        })
    numero_orden:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"pagado"
        })
    pagado:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"periodo_fiscal"
        })
    periodo_fiscal:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"pos_grupo"
        })
    pos_grupo:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"ruc"
        })
    ruc:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"total_pagar"
        })
    total_pagar:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"contribuyente"
        })
    contribuyente:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"formulario"
        })
    formulario:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"grupo"
        })
    grupo:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"transaccion"
        })
    transaccion:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"usuario_terminal_carga"
        })
    usuario_terminal_carga:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:25,
        name:"gestor"
        })
    gestor:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_vencimiento"
        })
    fecha_vencimiento:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"dias_atrasados"
        })
    dias_atrasados:string | null;
        

    @Column("character",{ 
        nullable:true,
        name:"migrado"
        })
    migrado:string | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"num_lote"
        })
    num_lote:number | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"transaccion_rc"
        })
    transaccion_rc:string | null;
        

    @Column("smallint",{ 
        nullable:true,
        name:"flg_pago_online"
        })
    flg_pago_online:number | null;
        

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
