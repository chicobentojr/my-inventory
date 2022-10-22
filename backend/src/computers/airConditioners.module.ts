import { Computer } from './computer.entity';
import { ComputersController } from './airConditioners.controller';
import { ComputersService } from './computers.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Computer])],
    providers: [ComputersService],
    controllers: [ComputersController],
})
export class ComputersModule { }