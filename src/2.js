const mysql=require("mysql2");

const dbinfo={
    host:"localhost",
    user:"root",
    password:"CDAC",
    database:"vscode"
}

const connection=mysql.createConnection(dbinfo);

connection.connect();

connection.query(`insert into user (username,password) values("Ashitosh","Ashu123")`);
connection.query(`select * from user`);

console.log("Success!!!!!!!!!!!");

connection.end();