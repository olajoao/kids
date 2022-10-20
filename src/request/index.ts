import axios from "axios"

const baseURL = "https://dummyjson.com/"

const config = {
  baseURL,
}

const request = axios.create(config)

export default request
