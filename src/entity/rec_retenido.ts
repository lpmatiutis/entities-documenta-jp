import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {recaudador} from "./recaudador";


@Entity("rec_retenido",{schema:"redcobrosjp" } )
export class rec_retenido {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_rec_retenido"
        })
    id_rec_retenido:string;
        

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.recRetenidos,{  nullable:false, })
    @JoinColumn({ name:'recaudador'})
    recaudador:recaudador | null;


    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_inicio"
        })
    fecha_inicio:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_final"
        })
    fecha_final:Date | null;
        

    @Column("character",{ 
        nullable:false,
        name:"retenido"
        })
    retenido:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"importe"
        })
    importe:string;
        
}
