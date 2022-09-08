function generateTicket(id, name, datetime) {
  return `
  <div class="tickets-list-item" ticket_id=${id}>
    <div class="tickets-list-item-btn tick"></div>
    <div class="tickets-list-item-content">
      <span class="name">${name}</span>
      <span class="description"></span>
    </div>
    <div class="tickets-list-item-content datetime">${datetime}</div>
    <div class="tickets-list-item-btn change-ticket">
      <div class="icon">&#9998;</div>
    </div>
    <div class="tickets-list-item-btn remove-ticket">
      <div class="icon">&#10006;</div>
    </div>
  </div>
  `
}

export default generateTicket;
