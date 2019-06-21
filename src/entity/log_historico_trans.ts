import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transaccion} from "./transaccion";
import {log_historico} from "./log_historico";


@Entity("log_historico_trans",{schema:"redcobrosjp" } )
export class log_historico_trans {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_log_historico_trans"
        })
    id_log_historico_trans:string;
        

   
    @ManyToOne(type=>transaccion, transaccion=>transaccion.logHistoricoTranss,{  })
    @JoinColumn({ name:'transaccion'})
    transaccion:transaccion | null;


   
    @OneToMany(type=>log_historico, log_historico=>log_historico.idLogHistoricoTrans)
    logHistoricos:log_historico[];
    
}
