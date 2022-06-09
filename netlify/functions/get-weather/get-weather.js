// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method


const axios = require("axios")

const WEATHER_KEY = process.env.WEATHER_KEY


const handler = async (event) => {
  try {
    const response = await axios.get( `https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&appid=${WEATHER_KEY}`)
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }