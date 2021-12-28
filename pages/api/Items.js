import axios from "axios";
export default async function (req, res) {
    if (req.method === "GET") {
        const dataRes = await fetch(`http://localhost:3001/api/items`);
        const data = await dataRes.json();
        return res.send(data);
    }
}