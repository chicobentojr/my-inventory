import { Branch } from './branch.entity';
import { BranchsController } from './branch.controller';
import { BranchsService } from './branchs.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Branch])],
    providers: [BranchsService],
    controllers: [BranchsController],
})
export class BranchsModule { }