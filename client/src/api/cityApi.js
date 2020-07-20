import axios from "axios";

export const cityApi = axios.create({baseURL:"http://localhost:8081/"})