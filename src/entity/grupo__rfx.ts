import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("grupo__rfx",{schema:"redcobrosjp" } )
export class grupo__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_grupo"
        })
    id_grupo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"cerrado"
        })
    cerrado:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha"
        })
    fecha:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"hora_cierre"
        })
    hora_cierre:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"hora_inicio"
        })
    hora_inicio:Date;
        

    @Column("bigint",{ 
        nullable:true,
        name:"numero_caja"
        })
    numero_caja:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"procesado"
        })
    procesado:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"proxima_posicion"
        })
    proxima_posicion:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"total_operaciones"
        })
    total_operaciones:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"gestion"
        })
    gestion:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"servicio"
        })
    servicio:string;
        

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
