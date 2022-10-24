import { Branch } from 'src/branches/branch.entity';
import { Computer } from './computer.entity';
import { ComputersController } from './computers.controller';
import { ComputersService } from './computers.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Computer, Branch])],
    providers: [ComputersService],
    controllers: [ComputersController],
})
export class ComputersModule { }