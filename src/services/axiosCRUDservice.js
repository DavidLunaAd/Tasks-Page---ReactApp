import axios from "axios";

/**
 * Login Method to ReqRes
 * @param {string} email 
 * @param {string} password 
 */
export const login = (email, password) => {

    let body = {
        email: email,
        password: password
    }

    //Returns the promise 
    return axios.post('https://reqres.in/api/login', body)

}

//TODO: Obtain all users
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')
}

//TODO: Obtain all  paged users
export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

//TODO: Obtain user by id
export const getUserById = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

//TODO: Create user
export const createUser = (name, job) =>{

    let body = {
        name: name,
        job: job
    }

    //Returns the promise 
    return axios.post('https://reqres.in/api/users', body)
}
//TODO: Update user
export const updateUser = (id, name, job) =>{

    let body = {
        name: name,
        job: job
    }

    //Returns the promise 
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

//TODO: Delete user
export const deleteUser = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}