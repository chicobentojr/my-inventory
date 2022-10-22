import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Branch } from 'src/branchs/branch.entity';

@Entity()
export class AirConditioner {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    description: string;

    @Column()
    quantity: number;

    @Column()
    btu: number;

    @ManyToOne(type => Branch, branch => branch.airConditioners)
    branch: Branch;
}