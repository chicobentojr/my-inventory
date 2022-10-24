import { AirConditionersModule } from './airConditioners/airConditioners.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BranchesModule } from './branches/branches.module';
import { ComputersModule } from './computers/computers.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.17.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'inventory',
      autoLoadEntities: true,
      synchronize: true,
    }),
    BranchesModule, AirConditionersModule, ComputersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
