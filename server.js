require('dotenv').config()

const express = require("express");

const { OpenAI } = require("openai")

const app = express()

app.use(express.json())

//init the openAI client for Grok API
const client = new OpenAI({
    apiKey: process.env.API_KEY,
    baseURL: process.env.BASE_URL
})


// route
app.get("/", (req, res) => {
    console.log("we are hitting this function")
    res.send("Hello World")
})

app.get("/api", async (req, res) => {
    const completion = await client.chat.completions.create({
        model: "grok-3",
        messages: [
            { role: "system", content: "You are Grok AI, respond to all requests like your from Texas!"},
            { role: "user", content: "What is the meaning of life?" }
        ]
        });
        console.log(completion)
    res.send(completion.choices[0])
})


app.listen(3000, () => {
    console.log("server is running on localhost:3000/")
})