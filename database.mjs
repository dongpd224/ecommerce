import sqlite3 from 'sqlite3'
import { open, Database} from 'sqlite'

async function setup() {
    try {
        const db = await open({
            filename: './mydb.sqlite',
            driver: sqlite3.Database,
        });
        await db.migrate({ force: 'last' })

        const items = await db.all('SELECT * FROM items')
        console.log(JSON.stringify(items))
    }

    catch (err) {
        console.log(err);
    }

}
setup()