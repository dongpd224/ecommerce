import { NextApiRequest,NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getAllItems(req: NextApiRequest, res: NextApiResponse){
    const db = await open({
        filename: './mydb.sqlite',
        driver: sqlite3.Database,
    });
    const items = await db.all('SELECT * from items')
    res.json(items)
}