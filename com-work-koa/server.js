const koa = require("koa");
const json = require("koa-json");
const bodyparser = require("koa-bodyparser");
const app = new koa();
const router = require("./router");


app.use(json()); // to use json in our app (use json as function)
app.use(bodyparser()); // to access request body

app.use(router.routes()).use(router.allowedMethods()) // using router 

app.listen(8800 , () => {
    console.log("listening on port 4000");
})


// npm i koa-json
//npm i koa-router
//npm i koa-bodyparser