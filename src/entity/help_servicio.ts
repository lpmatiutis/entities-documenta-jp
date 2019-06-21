import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";


@Entity("help_servicio",{schema:"redcobrosjp" } )
export class help_servicio {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_help_servicio"
        })
    id_help_servicio:string;
        

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.helpServicios,{  })
    @JoinColumn({ name:'servicio'})
    servicio:servicio_rc | null;


    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"como_pagar"
        })
    como_pagar:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"modulo"
        })
    modulo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"vencimiento"
        })
    vencimiento:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"observacion"
        })
    observacion:string | null;
        
}
