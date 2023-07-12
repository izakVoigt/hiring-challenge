import { Body, Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ITicketModule } from './interfaces';
import { TicketsService } from './tickets.service';
import { CreateTicketDto, UpdateTicketDto } from './dto';

@Controller('tickets')
export class TicketsController implements ITicketModule {
  constructor(@Inject(TicketsService) private readonly ticketsService: TicketsService) {}

  @Post()
  create(@Body() dto: CreateTicketDto) {
    return this.ticketsService.create(dto);
  }

  @Get()
  getList() {
    return this.ticketsService.getList();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTicketDto) {
    return this.ticketsService.update(id, dto);
  }
}
