import Tickets from './tickets-widget';

window.addEventListener('DOMContentLoaded', () => {
  const ticketsEl = document.querySelector('.tickets');
  const tickets = new Tickets(ticketsEl);
  tickets.init();
});
