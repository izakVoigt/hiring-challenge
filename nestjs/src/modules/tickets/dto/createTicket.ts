import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsNotEmpty({ message: '"client" should not be empty' })
  @IsString({ message: '"client" should be a string' })
  client: string;

  @IsNotEmpty({ message: '"deadline" should not be empty' })
  @IsDateString({ strict: false, strictSeparator: false }, { message: '"deadline" should be a string' })
  deadline: string;

  @IsNotEmpty({ message: '"issue" should not be empty' })
  @IsString({ message: '"issue" should be a string' })
  issue: string;
}
