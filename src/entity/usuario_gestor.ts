import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {usuario} from "./usuario";


@Entity("usuario_gestor",{schema:"redcobrosjp" } )
export class usuario_gestor {

   
    @ManyToOne(type=>usuario, usuario=>usuario.usuarioGestors,{  nullable:false, })
    @JoinColumn({ name:'usuario'})
    usuario:usuario | null;


    @Column("character varying",{ 
        nullable:false,
        length:25,
        name:"gestor"
        })
    gestor:string;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_usuario_gestor"
        })
    id_usuario_gestor:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"perfil"
        })
    perfil:string | null;
        
}
