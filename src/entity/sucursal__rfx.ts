import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("sucursal__rfx",{schema:"redcobrosjp" } )
export class sucursal__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_sucursal"
        })
    id_sucursal:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"codigo_sucursal"
        })
    codigo_sucursal:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"codigo_sucursal_set"
        })
    codigo_sucursal_set:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"direccion"
        })
    direccion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"numero_cuenta"
        })
    numero_cuenta:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"telefono"
        })
    telefono:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"contacto"
        })
    contacto:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"localidad"
        })
    localidad:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"recaudador"
        })
    recaudador:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"zona"
        })
    zona:string | null;
        

    @Column("character",{ 
        nullable:false,
        name:"es_tigo"
        })
    es_tigo:string;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:10,
        name:"latitud"
        })
    latitud:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:10,
        name:"longitud"
        })
    longitud:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"rubro"
        })
    rubro:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"ref_ubicacion"
        })
    ref_ubicacion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"barrio"
        })
    barrio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"otras_redes"
        })
    otras_redes:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"atencion_lun_vier"
        })
    atencion_lun_vier:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"atencion_sab"
        })
    atencion_sab:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"atencion_dom"
        })
    atencion_dom:string | null;
        

    @Column("character",{ 
        nullable:true,
        name:"carteleria"
        })
    carteleria:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"sitio_web"
        })
    sitio_web:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"redes_sociales"
        })
    redes_sociales:string | null;
        

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
