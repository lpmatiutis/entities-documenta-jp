import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("servicio__rfx",{schema:"redcobrosjp" } )
export class servicio__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_servicio"
        })
    id_servicio:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"codigo"
        })
    codigo:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"codigo_transaccional"
        })
    codigo_transaccional:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"comentario"
        })
    comentario:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"factura_incluye_comision"
        })
    factura_incluye_comision:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"facturable"
        })
    facturable:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"hora_cierre"
        })
    hora_cierre:Date;
        

    @Column("bigint",{ 
        nullable:false,
        name:"tamanho_grupo"
        })
    tamanho_grupo:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"facturador"
        })
    facturador:string;
        

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
