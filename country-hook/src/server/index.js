import axios from 'axios'

const  BASE_URL = "https://studies.cs.helsinki.fi/restcountries"

export const getAllCountry = ()=>{
    return axios.get(`${BASE_URL}/api/all`)
}

export const getCountryByName = (name)=>{
    return axios.get(`${BASE_URL}/api/name/${name}`)
}