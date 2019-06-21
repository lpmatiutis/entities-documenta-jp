import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {usuario} from "./usuario";


@Entity("usuario_supervisor",{schema:"redcobrosjp" } )
export class usuario_supervisor {

   
    @ManyToOne(type=>usuario, usuario=>usuario.usuarioSupervisors2,{  nullable:false, })
    @JoinColumn({ name:'usuario'})
    usuario:usuario | null;


   
    @ManyToOne(type=>usuario, usuario=>usuario.usuarioSupervisors,{  nullable:false, })
    @JoinColumn({ name:'supervisor'})
    supervisor:usuario | null;

}
