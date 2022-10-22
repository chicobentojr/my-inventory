import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
} from '@nestjs/common';
import { Computer } from './computer.entity';
import { ComputersService } from './computers.service';
import { CreateComputerDto } from './dto/computer.dto';



@Controller('computers')
export class ComputersController {
    constructor(private readonly computersService: ComputersService) { }

    @Post()
    create(@Body() createComputerDto: CreateComputerDto): Promise<Computer> {
        return this.computersService.create(createComputerDto);
    }

    @Get()
    findAll(): Promise<Computer[]> {
        return this.computersService.findAll();
    }

    @Get('by-branch/:branch')
    findByBranch(@Param('branch') branch: string): Promise<Computer[]> {
        return this.computersService.findByBranch(branch);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Computer> {
        return this.computersService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.computersService.remove(id);
    }
}