import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDBTicket, TicketSchema } from '../../databases/schemas/ticket';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: MongoDBTicket.name, schema: TicketSchema }])],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
