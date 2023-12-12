const express = require("express");
const app = express()
const bodyparser = require("body-parser");
app.use(bodyparser.json());


const xyRoute = require("./route");


app.use("/" , xyRoute);
app.disable("x-powered-by"); // this will help us give attackers less information
app.disable("etag"); //  It lets caches be more efficient and save bandwidth, as a web server does not need to resend a full response if the content was not changed.

app.listen(30000).on("error" , (err) => {
    if (err){
        console.log(err);
    }
    else{
        console.log("listening on port 3000");
    }
})