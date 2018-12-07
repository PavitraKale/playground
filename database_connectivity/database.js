var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "database",
});
/*con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE home (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    var sql = "INSERT INTO home (name,address) VALUES ('pavitra','#103 hub')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");*/
      
      con.connect(function(err) {
        if (err) throw err;
        var sql = "UPDATE home SET address = 'hubli' WHERE address = '#103 hub'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record updated");
    });
   
    });
