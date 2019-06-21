import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("registro_cheque__rfx",{schema:"redcobrosjp" } )
export class registro_cheque__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_transaccion"
        })
    id_transaccion:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"id_entidad_financiera"
        })
    id_entidad_financiera:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"nro_cheque"
        })
    nro_cheque:string;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_cheque"
        })
    fecha_cheque:Date | null;
        

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
