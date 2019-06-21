import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {franja_horaria_cab} from "./franja_horaria_cab";
import {terminal} from "./terminal";
import {usuario} from "./usuario";
import {form_contrib} from "./form_contrib";


@Entity("usuario_terminal",{schema:"redcobrosjp" } )
export class usuario_terminal {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_usuario_terminal"
        })
    id_usuario_terminal:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"logueado"
        })
    logueado:string | null;
        

   
    @ManyToOne(type=>franja_horaria_cab, franja_horaria_cab=>franja_horaria_cab.usuarioTerminals,{  nullable:false, })
    @JoinColumn({ name:'franja_horaria_cab'})
    franjaHorariaCab:franja_horaria_cab | null;


   
    @ManyToOne(type=>terminal, terminal=>terminal.usuarioTerminals,{  nullable:false, })
    @JoinColumn({ name:'terminal'})
    terminal:terminal | null;


   
    @ManyToOne(type=>usuario, usuario=>usuario.usuarioTerminals,{  nullable:false, })
    @JoinColumn({ name:'usuario'})
    usuario:usuario | null;


    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_pase"
        })
    fecha_pase:Date | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"pase"
        })
    pase:number | null;
        

   
    @OneToMany(type=>form_contrib, form_contrib=>form_contrib.usuarioTerminalCarga)
    formContribs:form_contrib[];
    
}
