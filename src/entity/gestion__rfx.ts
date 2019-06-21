import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("gestion__rfx",{schema:"redcobrosjp" } )
@Index("trg_iderror",["trg_iderror",])
export class gestion__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_gestion"
        })
    id_gestion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"cerrado"
        })
    cerrado:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fec_hora_ult_update"
        })
    fec_hora_ult_update:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_apertura"
        })
    fecha_apertura:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_cierre"
        })
    fecha_cierre:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"hora_apertura"
        })
    hora_apertura:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"hora_cierre"
        })
    hora_cierre:Date | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"nro_gestion"
        })
    nro_gestion:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"proxima_posicion"
        })
    proxima_posicion:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"terminal"
        })
    terminal:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"usuario"
        })
    usuario:string;
        

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
