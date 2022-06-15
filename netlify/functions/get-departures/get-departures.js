// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method


const axios = require("axios")

const RESBOT_KEY = process.env.RESBOT_KEY


const handler = async (event) => {
  try {
    const response = await axios.get( `https://api.resrobot.se/v2.1/departureBoard?id=740004046&duration=25&format=json&accessId=${RESBOT_KEY}`)
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
