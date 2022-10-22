import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Branch } from 'src/branchs/branch.entity';

export enum ComputerBrand {
    SAMSUNG = "Samsung",
    ACER = "Acer",
    DELL = "DELL",
    ASUS = "Asus",
    POSITIVO = "Positivo",
    AVELL = "Avell",
}

@Entity()
export class Computer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    description: string;

    @Column()
    quantity: number;

    @Column({
        type: "enum",
        enum: ComputerBrand,
    })
    brand: ComputerBrand;

    @ManyToOne(type => Branch, branch => branch.airConditioners)
    branch: Branch;
}