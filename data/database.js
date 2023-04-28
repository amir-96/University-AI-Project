const sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "mydatabase.sqlite";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(`CREATE TABLE graph_data (
      name text PRIMARY KEY,
      isAnswer integer,
      children text
    )`);
  }
});

module.exports = db;
