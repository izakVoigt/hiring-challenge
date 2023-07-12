import { TicketStatus } from '@utils/enums/ticketStatus';
import mongoose, { Schema, Document } from 'mongoose';

export interface ITicket extends Document {
  client: string;
  deadline: Date;
  issue: string;
  status: TicketStatus;
}

export const TicketSchema: Schema<ITicket> = new Schema(
  {
    client: { type: String, required: true },
    deadline: { type: Date, required: true },
    issue: { type: String, required: true },
    status: { type: String, enum: Object.values(TicketStatus), default: TicketStatus.OPEN },
  },
  { timestamps: true },
);

export const TicketModel = mongoose.model<ITicket>('Tickets', TicketSchema);
