import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("recaudador__rfx",{schema:"redcobrosjp" } )
export class recaudador__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_recaudador"
        })
    id_recaudador:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"codigo_recaudador"
        })
    codigo_recaudador:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"numero_cuenta"
        })
    numero_cuenta:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_orden_maximo"
        })
    numero_orden_maximo:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_orden_proximo"
        })
    numero_orden_proximo:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"numero_orden_tam_rango"
        })
    numero_orden_tam_rango:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"contacto"
        })
    contacto:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"entidad"
        })
    entidad:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"red"
        })
    red:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"numero_cuenta_comision"
        })
    numero_cuenta_comision:string | null;
        

    @Column("character",{ 
        nullable:true,
        name:"habilitado"
        })
    habilitado:string | null;
        

    @Column("character",{ 
        nullable:true,
        name:"conciliar_caja"
        })
    conciliar_caja:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"plantilla_comisional"
        })
    plantilla_comisional:string | null;
        

    @Column("character",{ 
        nullable:true,
        name:"responsable"
        })
    responsable:string | null;
        

    @Column("character",{ 
        nullable:true,
        name:"cabecera"
        })
    cabecera:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_alta"
        })
    fecha_alta:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_baja"
        })
    fecha_baja:Date | null;
        

    @Column("character",{ 
        nullable:true,
        name:"retenido"
        })
    retenido:string | null;
        

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
