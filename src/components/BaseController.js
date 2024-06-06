


const APIURL = 'https://app.nocodb.com/api/v2/tables/my4s0ohqgq68ecl/records';
const TOKEN = 'NPu07sNv7LjzMBZCL4S-cytQfG3t9j6HDuxyOabj';



class BaseController {

    

    constructor(tableId) {
        this.apiUrl = APIURL;
        this.token = TOKEN;
    }

    async getAll() {
        const response = await fetch(this.apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        return response.json();
    }

    async createItem(title) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Title: title
            })
        });

        const data = await response.json();
        return data;
    }

    async updateItem(id, newstatus) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Id: Id,
                Status: newstatus
            })
        });

        const data = await response.json();
        return data;
    }


    async getItemById(id) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();
        return data;
    }

    async deleteItem(id) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Id: id
            })
        });

        const data = await response.json();
        return data;
    }
}


export default TodosController;
