import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {formulario} from "./formulario";


@Entity("dominios",{schema:"redcobrosjp" } )
export class dominios {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_dominio"
        })
    id_dominio:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"etiqueta_cabecera"
        })
    etiqueta_cabecera:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"etiqueta_detalle"
        })
    etiqueta_detalle:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"formato"
        })
    formato:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"tipo"
        })
    tipo:string | null;
        

   
    @ManyToOne(type=>formulario, formulario=>formulario.dominioss,{  })
    @JoinColumn({ name:'formulario'})
    formulario:formulario | null;

}
