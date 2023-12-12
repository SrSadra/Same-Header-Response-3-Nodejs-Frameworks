
function validate(inp , inpString, errList){ 
   if (typeof inp !== 'number'){
      errList.push(`${inpString} must be a number conforming to the specified constraints`); // this returns variable name
   }
   if (inp === ''){
      errList.push(`${inpString} should not be empty`);
   }

}


function inputValidate(ctx , next){
   const {x , y} = ctx.request.body;
   let errList = [];
   validate(x , "x" , errList);
   validate(y , "y" , errList);
   if (errList.length != 0){
      ctx.body = {
         "message": errList.map((el) => el),
         "error": "Bad Request",
         "statusCode": 400
     };
     ctx.status = 400;
     return;
   }
   next();
}

module.exports = {inputValidate};