const Discord = require("discord.js");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'johnny.heliohost.org',
  user     : 'areaseca',
  password : 'Thiagom0@',
  database : 'areaseca_watcher'
});
module.exports.run = async (bot, message, args) => {
connection.connect();
var adr = args.splice(0,100).join(" ")
connection.query(`SELECT * FROM usuariodiscord WHERE user = '${message.author.username}'`, (err, rows) => {
  if (err) throw err;
  let sql;
  if (rows.length < 1) {
    sql = `INSERT INTO usuariodiscord (id, user, money) VALUES (NULL, '${message.author.username}', 30)`;
  }
  else {
    let money = rows[0].money;
    sql = 'UPDATE usuariodiscord SET money = ' + money + 30;
  }
  connection.query(sql);
});
 
connection.end();
}

module.exports.help = {
  name: "gxp"
}
