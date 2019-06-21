import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {evento} from "./evento";
import {suscriptor_evento} from "./suscriptor_evento";


@Entity("sector_evento",{schema:"redcobrosjp" } )
export class sector_evento {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id_sector"
        })
    id_sector:number;
        

   
    @ManyToOne(type=>evento, evento=>evento.sectorEventos,{  nullable:false, })
    @JoinColumn({ name:'evento'})
    evento:evento | null;


    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"monto"
        })
    monto:string;
        

   
    @OneToMany(type=>suscriptor_evento, suscriptor_evento=>suscriptor_evento.sector)
    suscriptorEventos:suscriptor_evento[];
    
}
