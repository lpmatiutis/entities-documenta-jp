import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {recaudador} from "./recaudador";
import {red} from "./red";


@Entity("red_recaudador_numero_orden",{schema:"redcobrosjp" } )
export class red_recaudador_numero_orden {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_red_recaudador_numero_orden"
        })
    id_red_recaudador_numero_orden:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_hora"
        })
    fecha_hora:Date;
        

    @Column("bigint",{ 
        nullable:false,
        name:"numero_final"
        })
    numero_final:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"numero_inicial"
        })
    numero_inicial:string;
        

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.redRecaudadorNumeroOrdens,{  nullable:false, })
    @JoinColumn({ name:'recaudador'})
    recaudador:recaudador | null;


   
    @ManyToOne(type=>red, red=>red.redRecaudadorNumeroOrdens,{  nullable:false, })
    @JoinColumn({ name:'red'})
    red:red | null;

}
