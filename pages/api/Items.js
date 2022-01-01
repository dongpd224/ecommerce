import data from './items_data.json'


export default async function (req, res) {
    if (req.method === "GET") {
        return res.send(data);
    }
}

// const express = require('express')
// const next = require('next')
// const dev = process.env.NODE_ENV !== 'production'

// const app = next({dev})
// const handle = app.getRequestHandler()

// app.prepare().then(()=>{
//     const server = express()
//     server.get('/')
// })