import axios from 'axios';
const apiUrl = "http://kosmic-forum-api.herokuapp.com/";
const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  }
const cors = require('cors')

const authService = {

    async authenticate(data) {
        const endpoint = `${apiUrl}/auth/sign-in/`
        return axios.post(endpoint, data, config);
    },

    setLoggedUser(data){
        let parsedData = JSON.stringify(data)
        localStorage.setItem("user", parsedData)
    },

    getLoggedUser(){
        let data = localStorage.getItem("user");
        if(!data) return null;
        try {
            let parsedData = JSON.parse(data)
            return parsedData
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

export default authService;