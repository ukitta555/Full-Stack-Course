import axios from "axios"
const baseURL = 'http://localhost:3001/api/persons'


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

const changePerson = (id, newEntry) =>
{
  const request = axios.put (`${baseURL}/${id}`, newEntry)
  return request.then(response => response.data)
}

export default {getAll, addPerson, deletePerson, changePerson}