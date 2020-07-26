import axios from "axios"
const baseURL = 'http://localhost:3001/persons'


const getAll = () =>
{
  const request = axios.get (baseURL)
  return request.then(response => response.data)
}

const addPerson = (newEntry) =>
{
  const request = axios.post (baseURL, newEntry)
  return request.then (response => response.data)
}

export default {getAll, addPerson}