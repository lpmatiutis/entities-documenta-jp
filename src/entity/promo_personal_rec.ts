import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {recaudador} from "./recaudador";
import {promocion_envios} from "./promocion_envios";


@Entity("promo_personal_rec",{schema:"redcobrosjp" } )
export class promo_personal_rec {

   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.promoPersonalRecs,{ primary:true, nullable:false, })
    @JoinColumn({ name:'recaudador'})
    recaudador:recaudador | null;


   
    @ManyToOne(type=>promocion_envios, promocion_envios=>promocion_envios.promoPersonalRecs,{ primary:true, nullable:false, })
    @JoinColumn({ name:'promocion'})
    promocion:promocion_envios | null;


    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"descripcion"
        })
    descripcion:string | null;
        
}
