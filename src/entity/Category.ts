import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinColumn
} from "typeorm";
import { Card } from "./Card";


@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    isActive: boolean

    @Column()
    addable: boolean

    // @OneToMany(type => Card, card => card.id, { cascade: ['remove'] })
    // cards: Card[]

}
