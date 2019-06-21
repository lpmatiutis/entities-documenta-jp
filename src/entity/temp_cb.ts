import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("temp_cb",{schema:"redcobrosjp" } )
export class temp_cb {

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"ruc"
        })
    ruc:string | null;
        
}
