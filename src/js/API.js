async function request(method) {
  const BASE_URL = 'http://localhost:8080/';
  let result;

  if (method === 'allTickets') {
    const response = await fetch(`${BASE_URL}?method=allTickets`);
    if (response.ok) {
      result = response.json();
    }
  }

  return result;
}

export default request;
