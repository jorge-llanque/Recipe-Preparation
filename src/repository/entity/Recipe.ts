import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string

    @Column({type: "text"})
    description: string;

    @Column({type: "text"})
    ingredients: string;

    @Column()
    category: string
}