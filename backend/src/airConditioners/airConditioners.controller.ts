import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
} from '@nestjs/common';
import { AirConditioner } from './airConditioner.entity';
import { AirConditionersService } from './airConditioners.service';
import { CreateAirConditionerDto } from './dto/airConditioner.dto';



@Controller('air-conditioners')
export class AirConditionersController {
    constructor(private readonly airConditionersService: AirConditionersService) { }

    @Post()
    create(@Body() createAirConditionerDto: CreateAirConditionerDto): Promise<AirConditioner> {
        return this.airConditionersService.create(createAirConditionerDto);
    }

    @Get()
    findAll(): Promise<AirConditioner[]> {
        return this.airConditionersService.findAll();
    }

    @Get('by-branch/:branch')
    findByBranch(@Param('branch') branch: string): Promise<AirConditioner[]> {
        return this.airConditionersService.findByBranch(branch);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<AirConditioner> {
        return this.airConditionersService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.airConditionersService.remove(id);
    }
}