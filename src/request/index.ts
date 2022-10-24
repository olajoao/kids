import axios from "axios"

const baseURL = "http://localhost:5000"

const config = {
  baseURL,
}

const request = axios.create(config)

export default request
