import axios from "axios"
const baseURL = 'http://localhost:3001/persons'


const getAll = () =>
{
  const request = axios.get (baseURL)
  return request.then(response => response.data)
}

const addPerson = newEntry =>
{
  const request = axios.post (baseURL, newEntry)
  return request.then (response => response.data)
}

const deletePerson = id =>
{
  return  axios.delete (`${baseURL}/${id}`)
}

export default {getAll, addPerson, deletePerson}