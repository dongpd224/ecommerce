export default async function Items(req, res) {
    if (req.method === "GET") {
      // ${process.env.API_URL}
      const {id} = req.query
      const dataRes = await fetch(`${process.env.API_URL}/items/${id}`);
      const data = await dataRes.json();
      return res.send(data);
    }
} 