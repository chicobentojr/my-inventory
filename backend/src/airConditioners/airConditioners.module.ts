import { AirConditioner } from './airConditioner.entity';
import { AirConditionersController } from './airConditioners.controller';
import { AirConditionersService } from './airConditioners.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([AirConditioner])],
    providers: [AirConditionersService],
    controllers: [AirConditionersController],
})
export class AirConditionersModule { }