import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transaccion_rc} from "./transaccion_rc";
import {transaccion} from "./transaccion";


@Entity("transaccion_clubcajero",{schema:"redcobrosjp" } )
@Index("idx_uq_transaccion_clubcajero_trx",["idtransaccion",],{unique:true})
@Index("idx_uq_transaccion_clubcajero_trx_set",["idtransaccionset",],{unique:true})
export class transaccion_clubcajero {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"idtransaccionclubcajero"
        })
    idtransaccionclubcajero:string;
        

   
    @OneToOne(type=>transaccion_rc, transaccion_rc=>transaccion_rc.transaccionClubcajero,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtransaccion'})
    idtransaccion:transaccion_rc | null;


   
    @OneToOne(type=>transaccion, transaccion=>transaccion.transaccionClubcajero,{ onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idtransaccionset'})
    idtransaccionset:transaccion | null;


    @Column("timestamp without time zone",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"fecahini"
        })
    fecahini:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fechafin"
        })
    fechafin:Date;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "0",
        precision:6,
        scale:2,
        name:"puntos"
        })
    puntos:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"activo"
        })
    activo:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecanulacion"
        })
    fecanulacion:Date | null;
        
}
