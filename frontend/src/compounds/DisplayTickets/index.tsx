import { Calendar, Display, DisplayContent, DisplayFooter, DisplayHeader } from '@components';
import { useTicket } from '@hooks';
import { CreateRandomTicketButton, CreateTicketButton, Ticket } from '..';

export const DisplayTickets = () => {
  const ticketContext = useTicket();

  return (
    <Display>
      <DisplayHeader>
        <Calendar />
      </DisplayHeader>
      <DisplayContent>
        {ticketContext.TicketData.length > 0 ? (
          <>
            {ticketContext.TicketData.map((ticket, index) => (
              <Ticket
                client={ticket.client}
                deadline={new Date(ticket.deadline)}
                id={ticket._id}
                index={index + 1}
                issue={ticket.issue}
                status={ticket.status}
                key={index}
              />
            ))}
          </>
        ) : (
          <></>
        )}
      </DisplayContent>
      <DisplayFooter>
        <CreateRandomTicketButton />
        <CreateTicketButton />
      </DisplayFooter>
    </Display>
  );
};
