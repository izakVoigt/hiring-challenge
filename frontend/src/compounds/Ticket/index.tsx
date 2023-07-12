import { Card, CardActions, Typography } from '@mui/material';
import { formatDate } from '@utils/index';
import { TicketActionsDiv, TicketIssueDiv } from './styles';
import { ITicket } from './types';
import { TicketStatus } from '..';

export const Ticket = ({ client, deadline, id, index, issue, status }: ITicket) => {
  return (
    <Card sx={{ width: 500, borderRadius: '10px', backgroundColor: '#aeeafc' }}>
      <CardActions sx={{ width: '100%', justifyContent: 'space-between' }}>
        <Typography fontWeight={500} component="p" sx={{ width: '50%' }}>
          {index}. {client}
        </Typography>
        <Typography fontWeight={500} component="p" sx={{ width: '20%' }}>
          {formatDate(deadline)}
        </Typography>
        <TicketActionsDiv>
          <TicketStatus deadline={deadline} id={id} status={status} />
        </TicketActionsDiv>
      </CardActions>
      <TicketIssueDiv>
        <Typography component="p" sx={{ color: '#3c3c3c' }}>
          {issue}
        </Typography>
      </TicketIssueDiv>
    </Card>
  );
};
