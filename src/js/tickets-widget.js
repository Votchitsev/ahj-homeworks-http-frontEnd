class Tickets {
  constructor(element) {
    this.tickets = element;
    this.addTicketForm = undefined;
    this.addTicketBtn = undefined;
    this.changeTicketForm = undefined;
    this.agreeForm = undefined;
    this.deletingElement = undefined;
  }

  init() {
    this.addTicketBtn = this.tickets.querySelector('.add-ticket');
    this.addTicketForm = document.querySelector('#add-ticket');
    this.changeTicketForm = document.querySelector('#change-ticket');
    this.agreeForm = document.querySelector('.agree');

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

    this.addTicketForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('add ticket submit');
      this.closeModal(this.addTicketForm);
    });

    this.changeTicketForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('change ticket submit');
    });

    this.agreeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('The ticket was deleted');
      this.closeModal(this.agreeForm);
    });

    this.addTicksListeners();
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
      });

      removeTicket.addEventListener('click', (e) => {
        e.stopPropagation();
        this.agreeForm.classList.add('active');
        console.log('Remove ticket');
      });

      ticks.item(i).addEventListener('click', () => {
        console.log('Show description');
      });
    }
  }

  closeModal(element) {
    element.classList.remove('active');
    element.reset();
  }
}

export default Tickets;
