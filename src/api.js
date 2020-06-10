const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joshuastruve';

function getItems() {
    return fetch(`${BASE_URL}/items`);
}

export default {
    getItems
}; 