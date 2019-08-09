const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Mm64088031!",
  database: "reservation_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});


function showReservations() {
    console.log("Selecting all tables...\n");
    connection.query('SELECT * FROM reservation', (err, rows) => {
        if (err) throw err;
        JSON.rows;


        // console.log(rows)
        let takenTables = [];
        let waitlist = [];

        for ( let i = 0; i < rows.length; i++){
            if (i <= 4){
            takenTables.push(rows[i].unique_ID);
            } else if (i >= 4){
                waitlist.push(rows[i].unique_ID);
            }
        }
        console.log("taken tables");
        console.log(takenTables);
        console.log("waitlist");
        console.log(waitlist);
    });
}
function addtable() {
    console.log("adding tables...\n");
    connection.query(
        "INSERT INTO auctions SET ?",
        {
          table_num: answer.item,
          reservation_name: answer.category,
          Email: answer.startingBid || 0,
          phone_num: answer.startingBid || 0,
          unique_ID: answer.unique_ID
        },
        function(err) {
          if (err) throw err;
          console.log("Your table was created successfully!");
          // re-prompt the user for if they want to bid or post
        }
      )
};
// addtable();
showReservations();
