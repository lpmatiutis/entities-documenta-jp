import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("campos_form_contrib__rfx",{schema:"redcobrosjp" } )
export class campos_form_contrib__rfx {

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"etiqueta"
        })
    etiqueta:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"numero_campo"
        })
    numero_campo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"valor"
        })
    valor:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"form_contrib"
        })
    form_contrib:string;
        

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
