import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {form_contrib} from "./form_contrib";


@Entity("campos_form_contrib",{schema:"redcobrosjp" } )
export class campos_form_contrib {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:255,
        name:"etiqueta"
        })
    etiqueta:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"numero_campo"
        })
    numero_campo:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"valor"
        })
    valor:string;
        

   
    @ManyToOne(type=>form_contrib, form_contrib=>form_contrib.camposFormContribs,{ primary:true, nullable:false, })
    @JoinColumn({ name:'form_contrib'})
    formContrib:form_contrib | null;

}
