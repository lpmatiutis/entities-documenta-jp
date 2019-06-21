import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {grupo_pagina} from "./grupo_pagina";
import {control_pagina} from "./control_pagina";
import {log_transaccion_rc} from "./log_transaccion_rc";


@Entity("patron_pagina",{schema:"redcobrosjp" } )
export class patron_pagina {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id_patron"
        })
    id_patron:number;
        

   
    @ManyToOne(type=>grupo_pagina, grupo_pagina=>grupo_pagina.patronPaginas,{  nullable:false, })
    @JoinColumn({ name:'id_grupo_pagina'})
    idGrupoPagina:grupo_pagina | null;


    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"url"
        })
    url:string;
        

    @Column("smallint",{ 
        nullable:false,
        default: () => "0",
        name:"error"
        })
    error:number;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"inicial"
        })
    inicial:string;
        

   
    @ManyToOne(type=>patron_pagina, patron_pagina=>patron_pagina.patronPaginas,{  })
    @JoinColumn({ name:'id_patron_siguiente'})
    idPatronSiguiente:patron_pagina | null;


   
    @OneToMany(type=>control_pagina, control_pagina=>control_pagina.idPatron)
    controlPaginas:control_pagina[];
    

   
    @OneToMany(type=>log_transaccion_rc, log_transaccion_rc=>log_transaccion_rc.idPatron)
    logTransaccionRcs:log_transaccion_rc[];
    

   
    @OneToMany(type=>patron_pagina, patron_pagina=>patron_pagina.idPatronSiguiente)
    patronPaginas:patron_pagina[];
    
}
