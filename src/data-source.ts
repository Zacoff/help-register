import "reflect-metadata"
import { DataSource } from "typeorm"
import 'dotenv/config'

const port = process.env.DB_PORT as unknown as number | undefined

const path = __dirname

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [`${path}/**/entities/*.{ts,js}`],
    migrations: [`${path}/**/migrations/*.{ts,js}`]
})
