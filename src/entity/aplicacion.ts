import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {permiso} from "./permiso";
import {rol} from "./rol";


@Entity("aplicacion",{schema:"redcobrosjp" } )
export class aplicacion {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_aplicacion"
        })
    id_aplicacion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @OneToMany(type=>permiso, permiso=>permiso.aplicacion)
    permisos:permiso[];
    

   
    @OneToMany(type=>rol, rol=>rol.aplicacion)
    rols:rol[];
    
}
