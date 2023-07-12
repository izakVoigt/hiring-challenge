import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { configModuleOptions, mongoDbOptions } from './configs';
import { TicketsModule } from './modules/tickets/tickets.module';

@Module({
  imports: [ConfigModule.forRoot(configModuleOptions), MongooseModule.forRootAsync(mongoDbOptions), TicketsModule],
})
export class AppModule {}
