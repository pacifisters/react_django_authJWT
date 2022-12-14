import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";


export const registration = async (email, password) => {

    const {data} = await $host.post('api/users/', {"user": { email, password } })
    localStorage.setItem('token', data.user.token)
    return jwt_decode(data.user.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/users/login/', {"user": { email, password } })
    localStorage.setItem('token', data.user.token)
    return jwt_decode(data.user.token)
}

export const check = async (email, password) => {
    const {data} = await $authHost.get('api/user/', {"user": { email, password } })
    localStorage.setItem('token', data.user.token)
    return jwt_decode(data.user.token)
}