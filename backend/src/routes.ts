import { Router } from 'express';
import { bodyValidation } from '@middlewares/index';
import ticketsController from './modules/tickets/ticketsController';
import { createTicketSchema, updateTicketSchema } from './modules/tickets/schemas';

const routes: Router = Router();

routes.get('/tickets', ticketsController.getTicketsList);
routes.post('/tickets', bodyValidation(createTicketSchema), ticketsController.createTicket);
routes.put('/tickets/:id', bodyValidation(updateTicketSchema), ticketsController.updateTicket);

export default routes;
