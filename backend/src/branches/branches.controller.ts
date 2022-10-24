import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { Branch } from './branch.entity';
import { BranchesService } from './branches.service';
import { CreateBranchDto } from './dto/branch.dto';



@Controller('branches')
export class BranchesController {
    constructor(private readonly branchesService: BranchesService) { }

    @Post()
    create(@Body() createBranchDto: CreateBranchDto): Promise<Branch> {
        return this.branchesService.create(createBranchDto);
    }

    @Put(':id')
    edit(@Param('id') id: string, @Body() createBranchDto: CreateBranchDto): Promise<Branch> {
        return this.branchesService.edit(id, createBranchDto);
    }

    @Get()
    findAll(): Promise<Branch[]> {
        return this.branchesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Branch> {
        return this.branchesService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.branchesService.remove(id);
    }
}