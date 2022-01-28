import axios from "axios";
export default async function (req, res) {
  if (req.method === "POST" || req.method === "PATCH") {
    const { item_name, item_brand, discount_price, img_link, stars} = req.body;
    //${process.env.API_URL}
    let url =  `http://localhost:3001/api/items`;
    if (!item_name || !item_brand || !discount_price || !img_link || !stars) {
      return res.status(422).send("Data are missing!");
    }
    if (req.method === "PATCH"){
      url += `/${id}`
    }
    
    try {

      const axiosRes = await axios[req.method.toLowerCase()](url, req.body);
      return res.send("Data has been updated");

    } catch {
      return res.status(422).send("Cannot update the data");
    }
  }
}
