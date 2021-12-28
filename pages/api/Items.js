import axios from "axios";
import data from './items_data.json'
export default async function (req, res) {
    if (req.method === "GET") {
        return res.send(data);
    }
}