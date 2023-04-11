const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const { pool } = require("./database");

app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    var query = "SELECT * FROM vreme"   
    pool.query(query, (err, resp)=>{
        if (err) throw err;
        else { res.render("index", {data: resp})
    
    }
    })

})

app.listen(port, () => {
    console.log("Running on port " + port)
})