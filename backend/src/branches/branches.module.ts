import { Branch } from './branch.entity';
import { BranchesController } from './branches.controller';
import { BranchesService } from './branches.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Branch])],
    providers: [BranchesService],
    controllers: [BranchesController],
    exports: [BranchesService]
})
export class BranchesModule { }