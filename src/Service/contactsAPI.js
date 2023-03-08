import axios from "axios";

const BASE_URL = 'https://6406653b77c1a905a0daa451.mockapi.io/phonebook/8/'

export async function fetchContacts() {
    const response = await axios(`${BASE_URL}contacts`);
  return response.data;
}

export async function addContact(contact) {
  const response = await axios.post(`${BASE_URL}contacts`, contact)
  return response.data
}

export async function deleteContact(contact, id) {
  const response = await axios.delete(`${BASE_URL}contacts/${id}`, contact)
  return response.data
}


