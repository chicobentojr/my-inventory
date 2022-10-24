import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Branch } from 'src/branches/branch.entity';

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

    @ManyToOne(type => Branch, branch => branch.airConditioners, { onDelete: "CASCADE" })
    branch: Branch;
}