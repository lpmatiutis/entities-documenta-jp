import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {red} from "./red";
import {recaudador} from "./recaudador";


@Entity("red_recaudador",{schema:"redcobrosjp" } )
@Index("red_recaudador_recaudador_idx",["idRecaudador",])
export class red_recaudador {

   
    @ManyToOne(type=>red, red=>red.redRecaudadors,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_red'})
    idRed:red | null;


   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.redRecaudadors,{ primary:true, nullable:false, })
    @JoinColumn({ name:'id_recaudador'})
    idRecaudador:recaudador | null;


    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"red_ticket"
        })
    red_ticket:string | null;
        
}
