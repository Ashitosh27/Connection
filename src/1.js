const mysql=require("mysql2");

const dbinfo={
    host:"localhost",
    user:"root",
    password:"CDAC",
    database:"vscode",
};

const connection=mysql.createConnection(dbinfo);

connection.connect();

console.log("Success!!!!!!!!!");

connection.end();