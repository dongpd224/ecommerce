import { NextApiRequest,NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getAllItems(req: NextApiRequest, res: NextApiResponse){
    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database,
    });
    if(req.method === "GET")
   {
        const items = await db.all('SELECT * from items')
        res.json(items)
   }
   if(req.method ==="POST"){
    try {

        const item = req.body
        const result = await db.run('INSERT INTO items(item_name, discount_price,img_link) VALUES (:item_name, :discount_price,:img_link)', {
        ':item_name': item.item_name,
        ':discount_price' : item.discount_price,
        ':img_link' : item.img_link
      })
        return res.send("Data has been updated");
  
      } catch {
        return res.status(422).send("Cannot update the data");
      }
       
   }
}