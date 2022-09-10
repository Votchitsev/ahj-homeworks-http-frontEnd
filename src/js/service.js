function closeModal(element) {
  element.classList.remove('active');
  element.reset();
}

function parseDate(datetime) {
  const date = new Date(datetime);
  const day = String(date.getDate()).length === 2 ? `${date.getDate()}` : `0${date.getDate()}`;
  const month = String(date.getMonth()).length === 2 ? `${date.getMonth()}` : `0${date.getMonth()}`;

  return `${day}.${month}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

export { closeModal, parseDate };
