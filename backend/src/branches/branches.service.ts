import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Branch } from './branch.entity';
import { CreateBranchDto } from './dto/branch.dto';

@Injectable()
export class BranchesService {
    constructor(
        @InjectRepository(Branch)
        private readonly branchesRepository: Repository<Branch>,
    ) { }

    create(createBranchDto: CreateBranchDto): Promise<Branch> {
        return this.branchesRepository.save({ ...createBranchDto });
    }

    async edit(id: string, createBranchDto: CreateBranchDto): Promise<Branch> {
        const branch = await this.branchesRepository.findOneBy({ id })
        return this.branchesRepository.save({
            ...branch,
            ...createBranchDto
        });
    }

    async findAll(): Promise<Branch[]> {
        return this.branchesRepository.find({ order: { name: 'ASC' } });
    }

    findOne(id: string): Promise<Branch> {
        return this.branchesRepository.findOneBy({ id: id });
    }

    async remove(id: string): Promise<void> {
        await this.branchesRepository.delete(id);
    }
}