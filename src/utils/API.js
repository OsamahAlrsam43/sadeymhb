import axios from "axios";


export default axios.create({
  baseURL: "https://saediweb.herokuapp.com/api/v1/",
  responseType: "json",
  headers: {
    "Content-type": "application/json",
    "Accept": 'application/pdf',
    



  }
});