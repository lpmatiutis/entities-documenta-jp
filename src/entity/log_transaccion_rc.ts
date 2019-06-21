import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {transaccion_rc} from "./transaccion_rc";
import {servicio_rc} from "./servicio_rc";
import {gestion} from "./gestion";
import {patron_pagina} from "./patron_pagina";
import {tipo_operacion} from "./tipo_operacion";
import {tipo_captura} from "./tipo_captura";
import {moneda} from "./moneda";
import {detalle_consulta} from "./detalle_consulta";


@Entity("log_transaccion_rc",{schema:"redcobrosjp" } )
export class log_transaccion_rc {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_log_transaccion_rc"
        })
    id_log_transaccion_rc:string;
        

   
    @ManyToOne(type=>transaccion_rc, transaccion_rc=>transaccion_rc.logTransaccionRcs,{  })
    @JoinColumn({ name:'id_transaccion'})
    idTransaccion:transaccion_rc | null;


    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"referencia_pago"
        })
    referencia_pago:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"monto"
        })
    monto:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:600,
        name:"mensaje"
        })
    mensaje:string | null;
        

    @Column("smallint",{ 
        nullable:false,
        name:"error"
        })
    error:number;
        

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.logTransaccionRcs,{  })
    @JoinColumn({ name:'id_servicio'})
    idServicio:servicio_rc | null;


   
    @ManyToOne(type=>gestion, gestion=>gestion.logTransaccionRcs,{  })
    @JoinColumn({ name:'id_gestion'})
    idGestion:gestion | null;


   
    @ManyToOne(type=>patron_pagina, patron_pagina=>patron_pagina.logTransaccionRcs,{  })
    @JoinColumn({ name:'id_patron'})
    idPatron:patron_pagina | null;


    @Column("timestamp without time zone",{ 
        nullable:false,
        name:"fecha_ingreso"
        })
    fecha_ingreso:Date;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"fecha_termino"
        })
    fecha_termino:Date | null;
        

   
    @ManyToOne(type=>tipo_operacion, tipo_operacion=>tipo_operacion.logTransaccionRcs,{  })
    @JoinColumn({ name:'id_tipo_operacion'})
    idTipoOperacion:tipo_operacion | null;


   
    @ManyToOne(type=>tipo_captura, tipo_captura=>tipo_captura.logTransaccionRcs,{  })
    @JoinColumn({ name:'id_tipo_captura'})
    idTipoCaptura:tipo_captura | null;


    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"comision"
        })
    comision:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"adicional"
        })
    adicional:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"tasa"
        })
    tasa:number | null;
        

   
    @ManyToOne(type=>moneda, moneda=>moneda.logTransaccionRcs,{  })
    @JoinColumn({ name:'moneda'})
    moneda:moneda | null;


   
    @OneToMany(type=>detalle_consulta, detalle_consulta=>detalle_consulta.idLogTransaccionRc)
    detalleConsultas:detalle_consulta[];
    
}
