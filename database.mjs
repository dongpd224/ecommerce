import sqlite3 from 'sqlite3'
import { open, Database} from 'sqlite'

async function setup() {
    try {
        const db = await open({
            filename: './mydb.sqlite',
            driver: sqlite3.Database,
        });
        const update = await db.run('UPDATE items SET star=? WHERE id=?', '5','7' )
        const star = await db.run('SELECT * FROM items')
        console.log(JSON.stringify(star))
    }

    catch (err) {
        console.log(err);
    }

}
setup()