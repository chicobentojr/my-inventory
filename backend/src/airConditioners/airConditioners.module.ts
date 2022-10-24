import { AirConditioner } from './airConditioner.entity';
import { AirConditionersController } from './airConditioners.controller';
import { AirConditionersService } from './airConditioners.service';
import { Branch } from 'src/branches/branch.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([AirConditioner, Branch])],
    providers: [AirConditionersService],
    controllers: [AirConditionersController],
})
export class AirConditionersModule { }