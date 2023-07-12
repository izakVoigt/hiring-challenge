import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoDBTicket } from '../../databases/schemas/ticket';
import { errorHandler } from '../../utils/errorHandler';
import { TicketStatusEnum } from '../../utils/enums/ticketStatus';
import { CreateTicketDto, UpdateTicketDto } from './dto';
import { ITicketModule } from './interfaces';

@Injectable()
export class TicketsService implements ITicketModule {
  constructor(@InjectModel(MongoDBTicket.name) private readonly ticketModel: Model<MongoDBTicket>) {}

  async create(dto: CreateTicketDto) {
    try {
      const newTicket = new this.ticketModel(dto);

      const ticket = await newTicket.save();

      return { ticket };
    } catch (error) {
      errorHandler(error);
    }
  }

  async getList() {
    try {
      const list = await this.ticketModel.find().sort({ deadline: -1 });

      return { list };
    } catch (error) {
      errorHandler(error);
    }
  }

  async update(id: string, dto: UpdateTicketDto) {
    try {
      const ticketExists = await this.ticketModel.findById(id);

      if (!ticketExists) throw new NotFoundException('Ticket not found');

      await this.ticketModel.findByIdAndUpdate(
        { _id: id },
        {
          client: dto.client,
          deadline: dto.deadline,
          issue: dto.issue,
          status: dto.status ? TicketStatusEnum[dto.status.toUpperCase()] : undefined,
        },
      );

      const ticket = await this.ticketModel.findById(id);

      return { ticket };
    } catch (error) {
      errorHandler(error);
    }
  }
}
