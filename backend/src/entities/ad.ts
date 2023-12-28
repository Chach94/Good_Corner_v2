import { BaseEntity, Column, CreateDateColumn, Entity , PrimaryGeneratedColumn} from "typeorm";
import { Length, Min } from 'class-validator'

@Entity()
export class Ad extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    @Length(5, 50,{ message: "le titre doit contenir entre 5 et 100 caractères"})
    title: string;

    @Column({ nullable: true, type: "text" })
    description: string; 

    @Column()
    owner: string; 

    @Column({ type: "float" })
    @Min(0, { message: "le prix doit etre positif"})
    price: number; 

    @Column()
    picture: string;   
    
    @Column()
    location: string; 

    @CreateDateColumn()
    createdAt: string; 

};