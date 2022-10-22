import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AirConditioner } from 'src/airConditioners/airConditioner.entity';

@Entity()
export class Branch {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(type => AirConditioner, airConditioner => airConditioner.branch)
    airConditioners: AirConditioner[];
}