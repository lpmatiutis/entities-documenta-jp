import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("eapn_nros_retornados_bkp",{schema:"redcobrosjp" } )
export class eapn_nros_retornados_bkp {

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
        
}
