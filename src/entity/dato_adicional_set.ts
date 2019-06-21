import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transaccion} from "./transaccion";
import {tipo_dato_adicional} from "./tipo_dato_adicional";


@Entity("dato_adicional_set",{schema:"redcobrosjp" } )
export class dato_adicional_set {

   
    @OneToOne(type=>transaccion, transaccion=>transaccion.datoAdicionalSet,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_transaccion'})
    idTransaccion:transaccion | null;


   
    @ManyToOne(type=>tipo_dato_adicional, tipo_dato_adicional=>tipo_dato_adicional.datoAdicionalSets,{  nullable:false, })
    @JoinColumn({ name:'id_tipo_adicional'})
    idTipoAdicional:tipo_dato_adicional | null;


    @Column("character varying",{ 
        nullable:false,
        length:1024,
        default: () => "' '",
        name:"valor"
        })
    valor:string;
        
}
