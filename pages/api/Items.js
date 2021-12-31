// import data from './items_data.json'
const fs = require('fs')
const pathToFile = './items_data.json'
let dbraw = fs.readFileSync(pathToFile);
const data = JSON.parse(dbraw);

export default async function (req, res) {
    if (req.method === "GET") {
        return res.send(data);
    }
    if (req.method === "POST") {
        const item = req.body;
        if (!item.name || !item.discount_price || !item.img_link) {
            return res.status(422).send("Data are missing!");
        }
        else {
            try {
                item.id = Date.now().toString()
                data.push(item)
                fs.writeFileSync(pathToFile, JSON.stringify(data))
                { 
                    return res.status(200).send(JSON.parse(data)); 
                }
            }

            catch {
                return res.status(422).send("Cannot update the data");
            }
        }
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