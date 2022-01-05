// Accessing user Details by Command Line Arguments..
const mysql=require("mysql2");
const process=require("process");

const dbinfo={
    host:"localhost",
    user:"root",
    password:"CDAC",
    database:"vscode",
};

const connection=mysql.createConnection(dbinfo);

connection.connect();
const userdetails={username:process.argv[2],password:process.argv[3]};
let query=`insert into user(username,password) values ("${userdetails.username}","${userdetails.password}")`;
connection.query(query);

console.log("Success!!!!!!");
connection.end();
