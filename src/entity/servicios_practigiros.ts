import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("servicios_practigiros",{schema:"redcobrosjp" } )
export class servicios_practigiros {

    @Column("bigint",{ 
        nullable:true,
        name:"id_servicio"
        })
    id_servicio:string | null;
        
}
