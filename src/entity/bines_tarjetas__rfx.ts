import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("bines_tarjetas__rfx",{schema:"redcobrosjp" } )
export class bines_tarjetas__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"bin"
        })
    bin:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:40,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"servicio_rc"
        })
    servicio_rc:number | null;
        

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
