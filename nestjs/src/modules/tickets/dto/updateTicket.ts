import { IsDateString, IsIn, IsOptional, IsString } from 'class-validator';
import { TicketStatusEnum } from '../../../utils/enums/ticketStatus';

export class UpdateTicketDto {
  @IsOptional()
  @IsString({ message: '"client" should be a string' })
  client?: string;

  @IsOptional()
  @IsDateString({ strict: false, strictSeparator: false }, { message: '"deadline" should be a string' })
  deadline?: string;

  @IsOptional()
  @IsString({ message: '"issue" should be a string' })
  issue?: string;

  @IsOptional()
  @IsIn(Object.values(TicketStatusEnum), { message: '"status" can only be "closed" or "open"' })
  @IsString({ message: '"status" should be a string' })
  status?: string;
}
