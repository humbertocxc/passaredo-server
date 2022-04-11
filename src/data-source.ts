import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Photo } from "./entity/Photo"
import { Card } from "./entity/Card"
import { Category } from "./entity/Category"


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "ec2-52-21-136-176.compute-1.amazonaws.com",
  port: 5432,
  username: "fxhgyztmouokwp",
  password: "d07bb60962af0bbf55a53b92c07257cc80b40e66f3a707d7aae168c2a6f3b658",
  database: "d1tb4384rk6emj",
  synchronize: true,
  logging: false,
  entities: [User, Photo, Card, Category],
  migrations: ["migrations/*.js"],
  subscribers: [],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  },
})