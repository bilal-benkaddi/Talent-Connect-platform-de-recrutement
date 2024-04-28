import axios from 'axios';


export const AxiosClient=axios.create({
baseURL:import.meta.env.VITE_API_BASE_URL
})