const axios = require('axios')
require("dotenv").config()

exports.handler = async(event,context)=>{
    console.log("hello")
    try {
       let response = await axios.get(`https://script.google.com/macros/s/${process.env.REACT_APP_KEY}/exec`,{
        Headers:{Accept:'application/json',"Accept-Encoding":"identity"},
        params:{trophies:true}
       })

       let data = response.data
       return{
        statusCode:200,
        body: JSON.stringify({data})
       }
    } catch (error) {
        return{
            statusCode:500,
            body: JSON.stringify({error})
        }
    }
}