const express = require('express')
const bodyparser = require("body-parser");
var path = require('path');
var cors = require("cors");

const config = require("./config");
const app = express();
const port = config.port;

const mongo_db = require("./connections/mongo_connection");

let app_init = async () => {

        await mongo_db.connect();

        const routes = require("./routes");

        const app = express();
        app.use(cors());
        app.use(bodyparser.json());

        app.use(routes);
        app.use(express.static(path.join(__dirname, './dist/sabh-khelo')));
        app.get('/',function(req,res){
           res.sendFile(path.join(__dirname,"./dist/sabh-khelo/index.html"));
        // res.redirect('/login');
        });
        app.get('/login',function(req,res){
          res.sendFile(path.join(__dirname,"./dist/sabh-khelo/index.html"));
        });
        app.get('/signup',function(req,res){
          res.sendFile(path.join(__dirname,"./dist/sabh-khelo/index.html"));
        });
        app.all('*', function(req, res) {
            res.redirect("/login");
          });

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}!`)
        });

}

app_init();