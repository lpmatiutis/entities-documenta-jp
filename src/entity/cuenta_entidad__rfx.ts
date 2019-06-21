import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("cuenta_entidad__rfx",{schema:"redcobrosjp" } )
export class cuenta_entidad__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_entidad"
        })
    id_entidad:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"cuenta"
        })
    cuenta:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:3,
        name:"tipo_cuenta"
        })
    tipo_cuenta:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_entidad_cuenta"
        })
    id_entidad_cuenta:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"servicio"
        })
    servicio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:2,
        name:"tipo_mov"
        })
    tipo_mov:string | null;
        

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
