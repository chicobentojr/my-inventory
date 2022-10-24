import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from 'src/branches/branch.entity';
import { Repository } from 'typeorm';
import { AirConditioner } from './airConditioner.entity';
import { CreateAirConditionerDto } from './dto/airConditioner.dto';

@Injectable()
export class AirConditionersService {
    constructor(
        @InjectRepository(AirConditioner)
        private readonly airConditionersRepository: Repository<AirConditioner>,
        @InjectRepository(Branch)
        private readonly branchRepository: Repository<Branch>,
    ) { }


    async create(createAirConditionerDto: CreateAirConditionerDto): Promise<AirConditioner> {
        const airConditioner = new CreateAirConditionerDto();
        airConditioner.branchId = createAirConditionerDto.branchId;
        airConditioner.description = createAirConditionerDto.description;
        airConditioner.btu = createAirConditionerDto.btu;
        airConditioner.quantity = createAirConditionerDto.quantity;

        const branch = await this.branchRepository.findOneBy({ id: airConditioner.branchId })
        return this.airConditionersRepository.save({
            ...airConditioner,
            branch
        });
    }

    async findAll(): Promise<AirConditioner[]> {
        return this.airConditionersRepository.find({ relations: { branch: true } });
    }

    async findByBranch(branchId: string): Promise<AirConditioner[]> {
        return this.airConditionersRepository.find({ where: { branch: { id: branchId } } });
    }

    findOne(id: string): Promise<AirConditioner> {
        return this.airConditionersRepository.findOneBy({ id: id });
    }

    async remove(id: string): Promise<void> {
        await this.airConditionersRepository.delete(id);
    }
}