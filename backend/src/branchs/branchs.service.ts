import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Branch } from './branch.entity';
import { CreateBranchDto } from './dto/branch.dto';

@Injectable()
export class BranchsService {
    constructor(
        @InjectRepository(Branch)
        private readonly branchsRepository: Repository<Branch>,
    ) { }

    create(createBranchDto: CreateBranchDto): Promise<Branch> {
        const branch = new Branch();
        branch.name = createBranchDto.name;
        branch.description = createBranchDto.description;

        return this.branchsRepository.save(branch);
    }

    async findAll(): Promise<Branch[]> {
        return this.branchsRepository.find();
    }

    findOne(id: string): Promise<Branch> {
        return this.branchsRepository.findOneBy({ id: id });
    }

    async remove(id: string): Promise<void> {
        await this.branchsRepository.delete(id);
    }
}