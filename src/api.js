const BASE_URL = 'https://thinkful-list-api.herokuapp.com/seyi-josh';

const getItems = function () {
  return fetch(`${BASE_URL}/items`);
};

function createItem(name) {
  let newItem = JSON.stringify({ name });

  JSON.stringify(newItem);

  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem,

  });


}

export default {
  getItems,
  createItem
};
