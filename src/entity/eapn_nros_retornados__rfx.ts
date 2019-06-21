import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("eapn_nros_retornados__rfx",{schema:"redcobrosjp" } )
export class eapn_nros_retornados__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"identificador"
        })
    identificador:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:15,
        name:"numero"
        })
    numero:string;
        

    @Column("character",{ 
        nullable:true,
        length:3,
        name:"id_receptor"
        })
    id_receptor:string | null;
        

    @Column("character",{ 
        nullable:true,
        length:3,
        name:"id_asignatario_original"
        })
    id_asignatario_original:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_ventana_cambio"
        })
    fecha_ventana_cambio:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_proceso"
        })
    fecha_proceso:Date;
        

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
