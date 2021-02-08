import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: "varchar", length: "50"})
    name: string;

    @Column({type: "varchar", length:"100"})
    email: string;

    @Column({type: "varchar", length:"100"})
    password: string;
}