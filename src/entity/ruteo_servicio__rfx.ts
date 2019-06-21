import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("ruteo_servicio__rfx",{schema:"redcobrosjp" } )
export class ruteo_servicio__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_facturador"
        })
    id_facturador:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"url_host"
        })
    url_host:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"puerto"
        })
    puerto:number | null;
        

    @Column("smallint",{ 
        nullable:false,
        name:"conexion_to"
        })
    conexion_to:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"read_to"
        })
    read_to:number;
        

    @Column("character",{ 
        nullable:false,
        name:"guardar_mensajes"
        })
    guardar_mensajes:string;
        

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
