import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {red} from "./red";
import {recaudador} from "./recaudador";
import {sucursal} from "./sucursal";
import {terminal} from "./terminal";


@Entity("informacion",{schema:"redcobrosjp" } )
export class informacion {

   
    @ManyToOne(type=>red, red=>red.informacions,{  })
    @JoinColumn({ name:'red'})
    red:red | null;


   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.informacions,{  })
    @JoinColumn({ name:'recaudador'})
    recaudador:recaudador | null;


   
    @ManyToOne(type=>sucursal, sucursal=>sucursal.informacions,{  })
    @JoinColumn({ name:'sucursal'})
    sucursal:sucursal | null;


   
    @ManyToOne(type=>terminal, terminal=>terminal.informacions,{  })
    @JoinColumn({ name:'terminal'})
    terminal:terminal | null;


    @Column("character varying",{ 
        nullable:false,
        length:1000,
        name:"mensaje"
        })
    mensaje:string;
        

    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_ini"
        })
    fecha_ini:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_fin"
        })
    fecha_fin:Date | null;
        

    @Column("character",{ 
        nullable:false,
        name:"activo"
        })
    activo:string;
        

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id_informacion"
        })
    id_informacion:number;
        
}
