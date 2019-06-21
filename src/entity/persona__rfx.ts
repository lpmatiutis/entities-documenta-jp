import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("persona__rfx",{schema:"redcobrosjp" } )
export class persona__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_persona"
        })
    id_persona:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"apellidos"
        })
    apellidos:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"direccion"
        })
    direccion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"nombres"
        })
    nombres:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"ruc_ci"
        })
    ruc_ci:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"telefono"
        })
    telefono:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"localidad"
        })
    localidad:string;
        

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
