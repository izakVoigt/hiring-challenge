export enum TicketStatus {
  OPEN = 'open',
  CLOSED = 'closed',
}

export const TicketStatusIndex: Record<string, TicketStatus> = {
  open: TicketStatus.OPEN,
  closed: TicketStatus.CLOSED,
};
