import request from './API';
import generateTicket from './generateTicket';

class Tickets {
  constructor(element) {
    this.tickets = element;
    this.addTicketForm = undefined;
    this.addTicketBtn = undefined;
    this.changeTicketForm = undefined;
    this.agreeForm = undefined;
    this.choosenTicket = undefined;
  }

  init() {
    this.addTicketBtn = this.tickets.querySelector('.add-ticket');
    this.addTicketForm = document.querySelector('#add-ticket');
    this.changeTicketForm = document.querySelector('#change-ticket');
    this.agreeForm = document.querySelector('.agree');

    this.redrawTickets();

    this.addListeners();
  }

  addListeners() {
    const addTicketCancelBtn = this.addTicketForm.querySelector('.cancel-btn');
    const changeTicketCancelBtn = this.changeTicketForm.querySelector('.cancel-btn');
    const agreeCancelBtn = this.agreeForm.querySelector('.cancel-btn');

    this.addTicketBtn.addEventListener('click', () => {
      this.addTicketForm.classList.add('active');
    });

    addTicketCancelBtn.addEventListener('click', () => {
      this.closeModal(this.addTicketForm);
    });

    changeTicketCancelBtn.addEventListener('click', () => {
      this.closeModal(this.changeTicketForm);
    });

    agreeCancelBtn.addEventListener('click', () => {
      this.closeModal(this.agreeForm);
    });

    this.addTicketForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const response = await request('createTicket', formData);

      if (response.ok) {
        this.redrawTickets();
      }
      this.closeModal(this.addTicketForm);
    });

    this.changeTicketForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(this.changeTicketForm);
      formData.append('id', this.choosenTicket.getAttribute('ticket_id'));
      const response = await request('changeTicket', formData);

      if (response.ok) {
        this.redrawTickets();
      }
      this.closeModal(this.changeTicketForm);
    });

    this.agreeForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const response = await request('deleteTicket', this.choosenTicket.getAttribute('ticket_id'));

      this.choosenTicket = undefined;

      if (response.ok) {
        this.redrawTickets();
      }

      this.closeModal(this.agreeForm);
    });
  }

  addTicksListeners() {
    const ticks = this.tickets.querySelectorAll('.tickets-list-item');

    for (let i = 0; i < ticks.length; i += 1) {
      const tick = ticks.item(i).querySelector('.tick');
      const changeTicket = ticks.item(i).querySelector('.change-ticket');
      const removeTicket = ticks.item(i).querySelector('.remove-ticket');

      tick.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Tick');
      });

      changeTicket.addEventListener('click', (e) => {
        e.stopPropagation();
        this.changeTicketForm.classList.add('active');
        this.choosenTicket = e.target.parentNode.parentNode;
      });

      removeTicket.addEventListener('click', (e) => {
        e.stopPropagation();
        this.agreeForm.classList.add('active');
        this.deletingElement = e.target.parentNode.parentNode;
      });

      ticks.item(i).addEventListener('click', () => {
        console.log('Show description');
      });
    }
  }

  async redrawTickets() {
    const ticketsList = this.tickets.querySelector('.tickets-list');

    while (ticketsList.firstChild) {
      ticketsList.removeChild(ticketsList.firstChild);
    }

    const ticketsData = await request('allTickets');
    for (let i = 0; i < ticketsData.length; i += 1) {
      const ticketData = ticketsData[i];

      const ticket = generateTicket(
        ticketData.id,
        ticketData.name,
        this.parseDate(ticketData.created),
      );

      ticketsList.insertAdjacentHTML('beforeend', ticket);

      this.addTicksListeners();
    }
  }

  closeModal(element) {
    element.classList.remove('active');
    element.reset();
  }

  parseDate(datetime) {
    const date = new Date(datetime);
    const day = String(date.getDate()).length === 2 ? `${date.getDate()}` : `0${date.getDate()}`;
    const month = String(date.getMonth()).length === 2 ? `${date.getMonth()}` : `0${date.getMonth()}`;

    return `${day}.${month}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }
}

export default Tickets;
