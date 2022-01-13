import axios from 'axios';

const url = 'http://localhost:3000';


const empresas = {
    getAll: async () => await axios.get(`${url}/empresas`),
    getOne: async (id) => await axios.get(`${url}/empresas/${id}`),
    create: (item) => axios.post(`${url}/products`, item),
    modify: (item) => axios.put(`${url}/products/${item.id}`, item),
    delete: (id) => axios.delete(`${url}/products/${id}`),
    toogleDone: (item) => axios.put(`${url}/categories/${item.id}`, {
        id: item.id,
        title: item.title, 
        done: !item.done
      }),
};

const offers = {
    getAll: async () => await axios.get(`${url}/ofertas`),
    getOne: async (id) => await axios.get(`${url}/ofertas/${id}`),
    getOffersOfEmprise: async (id) => await axios.get(`${url}/ofertas?empresa=${id}`),
    create: (item) => axios.post(`${url}/ofertas`, item),
    delete: (id) => axios.delete(`${url}/ofertas/${id}`),
    modify: (item) => axios.put(`${url}/ofertas/${item.id}`, item),
}

export default{
    empresas, offers
}