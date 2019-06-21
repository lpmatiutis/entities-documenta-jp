import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("servicio_rc__rfx",{schema:"redcobrosjp" } )
export class servicio_rc__rfx {

    @Column("integer",{ 
        nullable:false,
        name:"id_servicio"
        })
    id_servicio:number;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_facturador"
        })
    id_facturador:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"id_servicio_padre"
        })
    id_servicio_padre:number | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:40,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character",{ 
        nullable:false,
        name:"anulable"
        })
    anulable:string;
        

    @Column("character",{ 
        nullable:false,
        name:"cb_presente"
        })
    cb_presente:string;
        

    @Column("smallint",{ 
        nullable:false,
        name:"cb_longitud"
        })
    cb_longitud:number;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_moneda"
        })
    id_moneda:string;
        

    @Column("character",{ 
        nullable:false,
        name:"habilitado"
        })
    habilitado:string;
        

    @Column("smallint",{ 
        nullable:true,
        name:"id_complemento"
        })
    id_complemento:number | null;
        

    @Column("smallint",{ 
        nullable:false,
        name:"id_tipo_servicio"
        })
    id_tipo_servicio:number;
        

    @Column("bytea",{ 
        nullable:true,
        name:"imagen"
        })
    imagen:Buffer | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"nombre_imagen"
        })
    nombre_imagen:string | null;
        

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
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"hora_cierre"
        })
    hora_cierre:Date | null;
        
}
