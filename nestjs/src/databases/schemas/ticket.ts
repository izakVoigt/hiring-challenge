import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TicketStatusEnum } from '../../utils/enums/ticketStatus';

@Schema({ timestamps: true })
export class MongoDBTicket {
  @Prop({ type: String, required: true })
  client: string;

  @Prop({ type: Date, required: true })
  deadline: Date;

  @Prop({ type: String, required: true })
  issue: string;

  @Prop({ type: String, enum: Object.values(TicketStatusEnum), default: TicketStatusEnum.OPEN })
  status: string;
}

export const TicketSchema = SchemaFactory.createForClass(MongoDBTicket);
