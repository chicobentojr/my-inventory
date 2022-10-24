import { ComputerBrand } from "../computer.entity";

export class CreateComputerDto {
    branchId: string;
    description: string;
    quantity: number;
    brand: ComputerBrand;
}