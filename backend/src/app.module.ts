import { AirConditionersModule } from './airConditioners/airConditioners.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BranchsModule } from './branchs/branchs.module';
import { ComputersModule } from './computers/airConditioners.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeOrmModule.forRoot(configService.getTypeOrmConfig())
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
    BranchsModule, AirConditionersModule, ComputersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
