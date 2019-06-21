import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {dato_wb} from "./dato_wb";


@Entity("log_wb",{schema:"redcobrosjp" } )
export class log_wb {

   
    @ManyToOne(type=>dato_wb, dato_wb=>dato_wb.logWbs,{  nullable:false, })
    @JoinColumn({ name:'ticket'})
    ticket:dato_wb | null;


    @Column("character varying",{ 
        nullable:true,
        length:150,
        name:"descripcion"
        })
    descripcion:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha"
        })
    fecha:Date | null;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_log_wb"
        })
    id_log_wb:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"respuesta"
        })
    respuesta:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:200,
        name:"mensaje"
        })
    mensaje:string | null;
        
}
