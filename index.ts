import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
interface Row {
    col: string
  }
// you would have to import / invoke this in another file
export async function openDb () {
  return open<sqlite3.Database, sqlite3.Statement>({
    filename: './proba.db',
    driver: sqlite3.Database
  })
}

async function lerDatos(){
    const db = await openDb();
    await db.exec('INSERT INTO tbl VALUES ("test")');
    
    const result = await db.get<Row>('SELECT col FROM tbl WHERE col = ?', 'test');
    console.log('result:', result);
    console.log(await db.get<Row>('SELECT col FROM tbl WHERE col = ?', 'test'));
}
lerDatos()
/*
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function run() {
    // sqlite3.Database, sqlite3.Statement es el valor por defecto si no se especifica un genérico explícito
    const db = await open<sqlite3.Database, sqlite3.Statement>({
        filename: './proba.db',
        driver: sqlite3.Database,
    });

    //await db.exec('CREATE TABLE tbl (col TEXT)');
    await db.exec('INSERT INTO tbl VALUES ("test")');
    
    const result = await db.get('SELECT col FROM tbl WHERE col = ?', 'test');
    console.log('result:', result);
    console.log(await db.get('SELECT col FROM tbl WHERE col = ?', 'test'));
}

run().catch(err => console.error(err));
*/
