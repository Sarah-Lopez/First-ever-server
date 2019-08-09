
const http = require("http");
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8888;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        routeName: "herps",
        name: "Herps",
        phone: "5550123",
        email: "drep@me.com",
        uniqueId: "Merp101"
    },
    {
        routeName: "herpd",
        name: "Herpd",
        phone: "5550123",
        email: "drep@me.com",
        uniqueId: "Merp101"
    },
    {
        routeName: "herpb",
        name: "Herpb",
        phone: "5550123",
        email: "drep@me.com",
        uniqueId: "Merp101"
    }
];


const server = http.createServer(handleRequest);

function handleRequest(req, res) {

    const path = req.url;

    switch (path) {

        case "/":

        case "/tables":

        case "/table":

            return serveHTML(`${path}.html`, res);


        default:
            return serveHTML("/index.html", res);
    }


}

const serveHTML = (filePath, res) => {
    return fs.readFile(__dirname + filePath, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(data);
    })
}

app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });  

  app.get("/api/tables/:table", function(req, res) {
    const chosen = req.params.table;
  
    console.log(chosen);
  
     for (let i = 0; i < tables.length; i++) {
       if (chosen === tables[i].routeName) {
         return res.json(tables[i]);
       }
     }
  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/tables", function(req, res) {

    const newTable = req.body;
  
     newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
  
     console.log(newTable);
  
     tables.push(newTable);
  
    res.json(newTable);
  });

  app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
  });