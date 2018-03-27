import axios from 'axios';

export const HTTP =  axios.create({
  baseURL: `http://localhost:8001/v1/`,
  headers: {
    "user-token": "mpO18t2H__tZvl5GIWG4iAKO_QQ0RscEgKfTpBZexd3nU4QzdPDFooWrQJANamjEbVSFM4CxrqESdE7ZbdeLhQ==",
    "content-type": "application/json"
  }
})