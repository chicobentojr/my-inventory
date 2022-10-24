import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from 'src/branches/branch.entity';
import { Repository } from 'typeorm';
import { Computer } from './computer.entity';
import { CreateComputerDto } from './dto/computer.dto';

@Injectable()
export class ComputersService {
    constructor(
        @InjectRepository(Computer)
        private readonly computersRepository: Repository<Computer>,
        @InjectRepository(Branch)
        private readonly branchRepository: Repository<Branch>,
    ) { }

    async create(createComputerDto: CreateComputerDto): Promise<Computer> {
        const branch = await this.branchRepository.findOneBy({ id: createComputerDto.branchId })
        return this.computersRepository.save({
            ...createComputerDto,
            branch
        });
    }

    async edit(id: string, createComputerDto: CreateComputerDto): Promise<Computer> {
        const branch = await this.branchRepository.findOneBy({ id: createComputerDto.branchId })
        const computer = await this.computersRepository.findOneBy({ id })
        return this.computersRepository.save({
            ...computer,
            ...createComputerDto,
            branch
        });
    }

    async findAll(): Promise<Computer[]> {
        return this.computersRepository.find({
            relations: { branch: true }, order: {
                branch: { name: 'ASC' },
                description: 'ASC'
            }
        });
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