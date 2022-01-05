const mysql=require("mysql2");

const dbinfo={
    host:"localhost",
    user:"root",
    password:"CDAC",
    database:"vscode",
};

const connection=mysql.createConnection(dbinfo);

connection.connect();
let data={
    user:"Ashu",
    Pass:"123"
};

const query=`insert into user (username,password) values ("${data.user}","${data.Pass}")`;
connection.query(query);
console.log("Success!!!!!!!!!!");

connection.end();
