import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("red__rfx",{schema:"redcobrosjp" } )
export class red__rfx {

    @Column("bigint",{ 
        nullable:false,
        name:"id_red"
        })
    id_red:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"cod_era"
        })
    cod_era:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"cuenta_bcp_impuestos"
        })
    cuenta_bcp_impuestos:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"cuenta_bcp_otros_conceptos"
        })
    cuenta_bcp_otros_conceptos:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"cuenta_bcp_penalidades"
        })
    cuenta_bcp_penalidades:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"numero_cuenta"
        })
    numero_cuenta:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"numero_cuenta_procesador"
        })
    numero_cuenta_procesador:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"numero_orden_proximo"
        })
    numero_orden_proximo:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"banco_clearing"
        })
    banco_clearing:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"entidad"
        })
    entidad:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"numero_cuenta_iva"
        })
    numero_cuenta_iva:string | null;
        

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
