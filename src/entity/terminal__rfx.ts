import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("terminal__rfx",{schema:"redcobrosjp" } )
@Index("idx_terminal__rfx_error",["trg_iderror",])
export class terminal__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_terminal"
        })
    id_terminal:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"codigo_caja_set"
        })
    codigo_caja_set:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"codigo_hash"
        })
    codigo_hash:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"codigo_terminal"
        })
    codigo_terminal:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"consecutivo_actual_bp"
        })
    consecutivo_actual_bp:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"consecutivo_actual_form"
        })
    consecutivo_actual_form:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_consecutivo_set"
        })
    fecha_consecutivo_set:Date | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"proximo_nro_gestion"
        })
    proximo_nro_gestion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"url_impresora"
        })
    url_impresora:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"sucursal"
        })
    sucursal:string;
        

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
