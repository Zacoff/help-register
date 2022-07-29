import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Resquest as RequestEntity } from "./Request";
import { Sector } from "./Sector";
import { v4 as uuid  } from 'uuid'
import { Exclude } from "class-transformer";

@Entity('users')
export class User {
    @PrimaryColumn({ length: 36 , nullable : false})
    readonly ID_User : string

    @Column({ nullable : false })
    Name: string

    @Column({ unique : true })
    Email: string

    @Exclude()
    @Column({ length: 60, nullable : false })
    Password: string

    @ManyToOne(() => Sector, sector => sector.employees)
    @JoinColumn({ name : 'ID_Sector' })
    Sector : Sector

    @OneToMany(() => RequestEntity, request => request.Sector)
    requests: RequestEntity[]

    constructor () {
        !this.ID_User ? this.ID_User = uuid() : false;
    }
}