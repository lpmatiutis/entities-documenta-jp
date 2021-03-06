import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {form_contrib} from "./form_contrib";


@Entity("datos_formularios",{schema:"redcobrosjp" } )
export class datos_formularios {

   
    @OneToOne(type=>form_contrib, form_contrib=>form_contrib.datosFormularios,{ primary:true, nullable:false, })
    @JoinColumn({ name:'form_contrib'})
    formContrib:form_contrib | null;


    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"suscribe"
        })
    suscribe:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"caracter"
        })
    caracter:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"documento"
        })
    documento:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"lugar"
        })
    lugar:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"cabecera"
        })
    cabecera:string | null;
        
}
