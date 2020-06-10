const BASE_URL = 'https://thinkful-list-api.herokuapp.com/ei-student';

const getItems = function () {
  return fetch(`${BASE_URL}/items`);
};

function createItem(input) {
    let newItem = JSON.stringify({ input });

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
