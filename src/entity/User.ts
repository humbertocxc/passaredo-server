import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn
} from "typeorm";
import { Photo } from "./Photo"


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    photo_id: number

    @OneToOne(() => Photo)
    @JoinColumn({ name: "photo_id" })
    photo: Photo

}
