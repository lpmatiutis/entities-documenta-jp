import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tabla_temp3",{schema:"redcobrosjp" } )
export class tabla_temp3 {

    @Column("bigint",{ 
        nullable:false,
        name:"campo1"
        })
    campo1:string;
        
}
