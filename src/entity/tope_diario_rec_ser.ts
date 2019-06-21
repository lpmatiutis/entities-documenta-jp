import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {recaudador_servicio} from "./recaudador_servicio";


@Entity("tope_diario_rec_ser",{schema:"redcobrosjp" } )
export class tope_diario_rec_ser {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_tope_diario_rec_ser"
        })
    id_tope_diario_rec_ser:string;
        

   
    @ManyToOne(type=>recaudador_servicio, recaudador_servicio=>recaudador_servicio.topeDiarioRecSers,{  nullable:false, })
    @JoinColumn({ name:'id_recaudador_servicio'})
    idRecaudadorServicio:recaudador_servicio | null;


    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"tope"
        })
    tope:number;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        default: () => "LOCALTIMESTAMP",
        name:"fecha"
        })
    fecha:Date;
        
}
