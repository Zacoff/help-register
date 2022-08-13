import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Sector } from "./Sector";
import { User } from "./User";
import { v4 as uuid  } from 'uuid'

@Entity('requests')
export class Resquest {
    @PrimaryColumn({ length : 36 , nullable : false}) 
    readonly ID_Request : string

    @Column()
    Patrimony: string

    @Column({ type : 'enum', enum : [ 'open' , 'closed' ] })
    Status : string;

    @Column({ type : 'text' })
    Description : string;

    @Column({ type : 'text', nullable : true })
    Description_Solution: string

    @Column({ type : 'text' })
    Request_Date : string;

    @Column({ nullable : true })
    Solution_Date : string;

    @ManyToOne(() => Sector, sector => sector.requests)
    @JoinColumn({name : 'ID_Setor'})
    Sector : Sector;

    @ManyToOne(() => User, user => user.requests)
    @JoinColumn({name : 'ID_User'})
    User : User;

    constructor () {
        !this.ID_Request ? this.ID_Request = uuid() : false;
    }
}