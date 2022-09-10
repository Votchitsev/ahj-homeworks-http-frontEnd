import request from './API';
import generateTicket from './generateTicket';
import { closeModal, parseDate } from './service';

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
      closeModal(this.addTicketForm);
    });

    changeTicketCancelBtn.addEventListener('click', () => {
      closeModal(this.changeTicketForm);
    });

    agreeCancelBtn.addEventListener('click', () => {
      closeModal(this.agreeForm);
    });

    this.addTicketForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const response = await request('createTicket', formData);

      if (response.ok) {
        this.redrawTickets();
      }
      closeModal(this.addTicketForm);
    });

    this.changeTicketForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(this.changeTicketForm);
      formData.append('id', this.choosenTicket.getAttribute('ticket_id'));
      const response = await request('changeTicket', formData);

      if (response.ok) {
        this.redrawTickets();
      }
      closeModal(this.changeTicketForm);
    });

    this.agreeForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const response = await request('deleteTicket', this.choosenTicket.getAttribute('ticket_id'));

      this.choosenTicket = undefined;

      if (response.ok) {
        this.redrawTickets();
      }

      closeModal(this.agreeForm);
    });
  }

  addTicksListeners() {
    const ticks = this.tickets.querySelectorAll('.tickets-list-item');

    for (let i = 0; i < ticks.length; i += 1) {
      if (!ticks.item(i).getAttribute('has_event_listeners')) {
        const tick = ticks.item(i).querySelector('.tick');
        const changeTicket = ticks.item(i).querySelector('.change-ticket');
        const removeTicket = ticks.item(i).querySelector('.remove-ticket');

        tick.addEventListener('click', (e) => {
          e.stopPropagation();

          if (e.currentTarget.firstChild) {
            e.currentTarget.firstChild.remove();
            return;
          }
          e.currentTarget.innerHTML = '<div class="icon">&#10003</div>';
        });

        changeTicket.addEventListener('click', (e) => {
          e.stopPropagation();
          this.changeTicketForm.classList.add('active');
          this.choosenTicket = e.target.closest('.tickets-list-item');
        });

        removeTicket.addEventListener('click', (e) => {
          e.stopPropagation();
          this.agreeForm.classList.add('active');
          this.choosenTicket = e.target.closest('.tickets-list-item');
        });

        ticks.item(i).addEventListener('click', async (e) => {
          const ticket = e.currentTarget.closest('.tickets-list-item');
          const ticketData = await request('ticketById', ticket.getAttribute('ticket_id'));
          const description = ticket.querySelector('.description');

          if (description.textContent.length === 0) {
            description.textContent = ticketData.description;
            return;
          }

          description.textContent = '';
        });

        ticks.item(i).setAttribute('has_event_listeners', true);
      }
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
        parseDate(ticketData.created),
      );

      ticketsList.insertAdjacentHTML('beforeend', ticket);

      this.addTicksListeners();
    }
  }
}

export default Tickets;
