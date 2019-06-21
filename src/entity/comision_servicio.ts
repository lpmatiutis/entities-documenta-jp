import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";


@Entity("comision_servicio",{schema:"redcobrosjp" } )
export class comision_servicio {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"id_comision_servicio"
        })
    id_comision_servicio:number;
        

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.comisionServicios,{  nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:servicio_rc | null;


    @Column("real",{ 
        nullable:true,
        precision:24,
        name:"porcentaje"
        })
    porcentaje:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"minimo"
        })
    minimo:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"maximo"
        })
    maximo:number | null;
        
}
