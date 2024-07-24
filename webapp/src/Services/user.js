import axios from "axios";

export async function postUser(email, name, status, admission) {
    const data = {
        "email": email,
        "name": name,
        "status": status,
        "admission": admission
    }
    const {data: res} = await axios({method: 'post', url: `http://127.0.0.1:8000/api/users`, data});
    return res;
}

export async function putUser(email, name, status, admission, id) {
    const data = {
        "email": email,
        "name": name,
        "status": status,
        "admission": admission
    }
    const {data: res} = await axios({method: 'put', url: `http://127.0.0.1:8000/api/users/${id}`, data});
    return res;
}

export async function getUser() {
    const {data: res} = await axios({method: 'get', url: `http://127.0.0.1:8000/api/users`});
    return res;
}

export async function deleteUser(id) {
    const {data: res} = await axios({method: 'delete', url: `http://127.0.0.1:8000/api/users/${id}`});
    return res;
}