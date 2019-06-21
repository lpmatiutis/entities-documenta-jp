import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {suscriptor} from "./suscriptor";
import {sector_evento} from "./sector_evento";


@Entity("suscriptor_evento",{schema:"redcobrosjp" } )
export class suscriptor_evento {

   
    @ManyToOne(type=>suscriptor, suscriptor=>suscriptor.suscriptorEventos,{ primary:true, nullable:false, })
    @JoinColumn({ name:'suscriptor'})
    suscriptor:suscriptor | null;


   
    @ManyToOne(type=>sector_evento, sector_evento=>sector_evento.suscriptorEventos,{ primary:true, nullable:false, })
    @JoinColumn({ name:'sector'})
    sector:sector_evento | null;


    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_suscripcion"
        })
    fecha_suscripcion:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1,
        default: () => "'N'",
        name:"pagado"
        })
    pagado:string | null;
        
}
