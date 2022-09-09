async function request(method, data = null) {
  const BASE_URL = 'http://localhost:8080/';
  let result;

  if (method === 'allTickets') {
    const response = await fetch(`${BASE_URL}?method=allTickets`);
    if (response.ok) {
      result = response.json();
    }
  }

  if (method === 'createTicket') {
    const response = await fetch(`${BASE_URL}?method=createTicket`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        name: data.get('name'),
        description: data.get('description'),
      }),
    });

    result = response;
  }

  if (method === 'deleteTicket') {
    const response = await fetch(`${BASE_URL}?method=deleteTicket&id=${data}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });

    result = response;
  }

  if (method === 'changeTicket') {
    const response = await fetch(`${BASE_URL}?method=changeTicket`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: data.get('id'),
        name: data.get('name'),
        description: data.get('description'),
      }),
    });

    result = response;
  }

  return result;
}

export default request;
