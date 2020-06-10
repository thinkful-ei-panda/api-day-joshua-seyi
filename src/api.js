const BASE_URL = 'https://thinkful-list-api.herokuapp.com/seyiariyo';

const getItems = function () {
    return fetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
    console.log(name)
    const newItem = JSON.stringify({name});
    

    return fetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newItem
    });
};

function updateItem(id, updateData) {
    console.log(updateData);
    const newData = JSON.stringify({updateData});

    return fetch(`${BASE_URL}/items/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newData
    });
}

export default {
    getItems,
    createItem,
    updateItem

};