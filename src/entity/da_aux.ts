import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("da_aux",{schema:"redcobrosjp" } )
export class da_aux {

    @Column("bigint",{ 
        nullable:false,
        name:"campo1"
        })
    campo1:string;
        
}
