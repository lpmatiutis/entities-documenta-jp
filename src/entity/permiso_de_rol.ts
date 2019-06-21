import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {permiso} from "./permiso";
import {rol} from "./rol";


@Entity("permiso_de_rol",{schema:"redcobrosjp" } )
export class permiso_de_rol {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_permiso_de_rol"
        })
    id_permiso_de_rol:string;
        

   
    @ManyToOne(type=>permiso, permiso=>permiso.permisoDeRols,{  nullable:false, })
    @JoinColumn({ name:'permiso'})
    permiso:permiso | null;


   
    @ManyToOne(type=>rol, rol=>rol.permisoDeRols,{  nullable:false, })
    @JoinColumn({ name:'rol'})
    rol:rol | null;

}
