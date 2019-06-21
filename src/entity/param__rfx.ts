import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("param__rfx",{schema:"redcobrosjp" } )
export class param__rfx {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:200,
        name:"key"
        })
    key:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:200,
        name:"value"
        })
    value:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:200,
        name:"defaultvalue"
        })
    defaultvalue:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:2000,
        name:"obs"
        })
    obs:string | null;
        
}
