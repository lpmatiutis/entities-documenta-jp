import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("temp_copaco",{schema:"redcobrosjp" } )
export class temp_copaco {

    @Column("bigint",{ 
        nullable:false,
        name:"factura"
        })
    factura:string;
        
}
