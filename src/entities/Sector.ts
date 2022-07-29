import { Resquest as RequestEntity } from "./Request";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('sectors')
export class Sector {
    @PrimaryGeneratedColumn()
    readonly ID_Sector: number

    @Column({ type : 'text', unique: true })
    Sector_Name: string

    @OneToMany(() => User, user => user.Sector)
    employees: User[]

    @OneToMany(() => RequestEntity, request => request.Sector)
    requests: RequestEntity[]
    
}