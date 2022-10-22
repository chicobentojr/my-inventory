import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Computer } from './computer.entity';
import { CreateComputerDto } from './dto/computer.dto';

@Injectable()
export class ComputersService {
    constructor(
        @InjectRepository(Computer)
        private readonly computersRepository: Repository<Computer>,
    ) { }

    create(createComputerDto: CreateComputerDto): Promise<Computer> {
        const computer = new Computer();
        computer.branch.id = createComputerDto.branchId;
        computer.description = createComputerDto.description;
        computer.quantity = createComputerDto.quantity;
        computer.brand = createComputerDto.brand;

        return this.computersRepository.save(computer);
    }

    async findAll(): Promise<Computer[]> {
        return this.computersRepository.find();
    }

    async findByBranch(branchId: string): Promise<Computer[]> {
        return this.computersRepository.find({ where: { branch: { id: branchId } } });
    }

    findOne(id: string): Promise<Computer> {
        return this.computersRepository.findOneBy({ id: id });
    }

    async remove(id: string): Promise<void> {
        await this.computersRepository.delete(id);
    }
}