import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recipe } from "./Recipe";

@Entity()
export class Category {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: "varchar", length: "100"})
    name: string;

    @OneToMany(type => Recipe, recipe => recipe.category)
    recipes: Recipe[];
}