import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recipe } from "./Recipe";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: "varchar", length: "50"})
    name: string;

    @Column({type: "varchar", length:"100"})
    email: string;

    @Column({type: "varchar"})
    password: string;

    @OneToMany(type => Recipe, recipe => recipe.user)
    recipes: Recipe[]
}