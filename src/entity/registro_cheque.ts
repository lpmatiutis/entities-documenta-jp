import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transaccion_rc} from "./transaccion_rc";
import {entidad_financiera} from "./entidad_financiera";


@Entity("registro_cheque",{schema:"redcobrosjp" } )
export class registro_cheque {

   
    @OneToOne(type=>transaccion_rc, transaccion_rc=>transaccion_rc.registroCheque,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_transaccion'})
    idTransaccion:transaccion_rc | null;


   
    @ManyToOne(type=>entidad_financiera, entidad_financiera=>entidad_financiera.registroCheques,{  nullable:false, })
    @JoinColumn({ name:'id_entidad_financiera'})
    idEntidadFinanciera:entidad_financiera | null;


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
        
}
