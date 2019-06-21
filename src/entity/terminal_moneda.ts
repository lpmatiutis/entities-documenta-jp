import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {moneda} from "./moneda";


@Entity("terminal_moneda",{schema:"redcobrosjp" } )
export class terminal_moneda {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"terminal"
        })
    terminal:string;
        

   
    @ManyToOne(type=>moneda, moneda=>moneda.terminalMonedas,{ primary:true, nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:moneda | null;


    @Column("character",{ 
        nullable:true,
        default: () => "'S'",
        name:"soportado"
        })
    soportado:string | null;
        
}
