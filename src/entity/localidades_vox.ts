import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("localidades_vox",{schema:"redcobrosjp" } )
export class localidades_vox {

    @Column("bigint",{ 
        nullable:false,
        name:"id_localidad"
        })
    id_localidad:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"descripcion"
        })
    descripcion:string | null;
        
}
