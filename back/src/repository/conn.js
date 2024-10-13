import mysql from  'mysql2/promise';

const con = await mysql.createConnection({
    host:process.env.HT,
    user:process.env.US,
    password:process.env.PWSD,
    database:process.env.BD
});

console.log(`api conectada com ${process.env.BD}`);
export default con;