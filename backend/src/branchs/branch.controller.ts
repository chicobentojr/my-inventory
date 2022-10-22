import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
} from '@nestjs/common';
import { Branch } from './branch.entity';
import { BranchsService } from './branchs.service';
import { CreateBranchDto } from './dto/branch.dto';



@Controller('branchs')
export class BranchsController {
    constructor(private readonly branchsService: BranchsService) { }

    @Post()
    create(@Body() createBranchDto: CreateBranchDto): Promise<Branch> {
        return this.branchsService.create(createBranchDto);
    }

    @Get()
    findAll(): Promise<Branch[]> {
        return this.branchsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Branch> {
        return this.branchsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.branchsService.remove(id);
    }
}