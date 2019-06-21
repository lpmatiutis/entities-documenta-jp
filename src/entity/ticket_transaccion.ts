import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transaccion_rc} from "./transaccion_rc";
import {tipo_operacion} from "./tipo_operacion";


@Entity("ticket_transaccion",{schema:"redcobrosjp" } )
export class ticket_transaccion {

   
    @ManyToOne(type=>transaccion_rc, transaccion_rc=>transaccion_rc.ticketTransaccions,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_transaccion'})
    idTransaccion:transaccion_rc | null;


   
    @ManyToOne(type=>tipo_operacion, tipo_operacion=>tipo_operacion.ticketTransaccions,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_tipo_operacion'})
    idTipoOperacion:tipo_operacion | null;


    @Column("character varying",{ 
        nullable:false,
        length:4000,
        name:"ticket"
        })
    ticket:string;
        
}
