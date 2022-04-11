import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn
} from "typeorm";
import { User } from "./User";
import { Category } from "./Category";


@Entity()
export class Card {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    deadline: Date

    @Column()
    user_id: number

    @Column()
    category_id: number

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category

}
