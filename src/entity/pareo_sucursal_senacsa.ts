import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {cod_sucursal_senacsa} from "./cod_sucursal_senacsa";


@Entity("pareo_sucursal_senacsa",{schema:"redcobrosjp" } )
export class pareo_sucursal_senacsa {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_sucursal"
        })
    id_sucursal:string;
        

   
    @ManyToOne(type=>cod_sucursal_senacsa, cod_sucursal_senacsa=>cod_sucursal_senacsa.pareoSucursalSenacsas,{  nullable:false, })
    @JoinColumn({ name:'cod_senacsa'})
    codSenacsa:cod_sucursal_senacsa | null;


    @Column("character",{ 
        nullable:false,
        default: () => "'S'",
        name:"habilitado"
        })
    habilitado:string;
        
}
