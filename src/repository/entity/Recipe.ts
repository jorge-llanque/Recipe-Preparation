import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { User } from "./User";

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

    @ManyToOne(type => User, user => user.recipes)
    user: User;

    @ManyToOne(type => Category, category => category.recipes)
    category: Category;
}