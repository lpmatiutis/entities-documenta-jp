import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {homebankingcuenta} from "./homebankingcuenta";


@Entity("homebankingcuentahis",{schema:"redcobrosjp" } )
export class homebankingcuentahis {

   
    @ManyToOne(type=>homebankingcuenta, homebankingcuenta=>homebankingcuenta.homebankingcuentahiss,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'codigohb'})
    codigohb:homebankingcuenta | null;


   
    @ManyToOne(type=>homebankingcuenta, homebankingcuenta=>homebankingcuenta.homebankingcuentahiss2,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'idhomebankingtipocuenta'})
    idhomebankingtipocuenta:homebankingcuenta | null;


   
    @ManyToOne(type=>homebankingcuenta, homebankingcuenta=>homebankingcuenta.homebankingcuentahiss3,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'nrocuenta'})
    nrocuenta:homebankingcuenta | null;


    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"idhomebankingcuentahis"
        })
    idhomebankingcuentahis:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"feccambio"
        })
    feccambio:Date;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"nrodocumento"
        })
    nrodocumento:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"titular"
        })
    titular:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:10,
        name:"nrocelular"
        })
    nrocelular:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:150,
        name:"correo"
        })
    correo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:8,
        name:"fecven"
        })
    fecven:string | null;
        
}
