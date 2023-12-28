import { BaseEntity, Column, CreateDateColumn, Entity , PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Ad extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    title!: string;

    @Column({ nullable: true, type: "text" })
    description!: string; 

    @Column()
    owner!: string; 

    @Column({ type: "float" })
    price!: number; 

    @Column()
    picture!: string;   
    
    @Column()
    location!: string; 

    @CreateDateColumn()
    createdAt!: string; 

   

};