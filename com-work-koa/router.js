const  Router = require('@koa/router')
const router = new Router();
const {inputValidate} = require("./input.middleware")



router.post("/",inputValidate,async (ctx) => { // ctx is koa context that give us access and modify to request and response
    const {x , y} = ctx.request.body;
    ctx.body = {z : x * y};
})


module.exports = router

