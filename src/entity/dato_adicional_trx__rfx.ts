import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("dato_adicional_trx__rfx",{schema:"redcobrosjp" } )
@Index("inx_dato_adicional_trx__rfx",["trg_iderror",])
export class dato_adicional_trx__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_transaccion"
        })
    id_transaccion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"id_tipo_adicional"
        })
    id_tipo_adicional:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:2048,
        name:"valor"
        })
    valor:string;
        

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
