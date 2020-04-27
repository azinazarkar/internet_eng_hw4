const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname ));
var fs = require('fs');
const axios = require("axios");


app.get("/", function(req, res){
    var locations ; 
    axios.get('http://covid19api.xapix.io/v2/locations').then((response) => {
        locations = response.data.locations;
        res.render('index', {locations: locations });
    }).catch((error) =>  {return "ERROR";} );
    return "1";
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});