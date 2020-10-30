//#region requires

const http = require("http");
const { handleGetRequest } = require("./middleware");


//#endregion requires


//#region variables

//#endregion variables


//#region functions

//#endregion functions


//#region MAIN

const server = http.createServer(function(request,response){
    // response.writeHead(200, {
    //     "Content-Type": "application/json; charset=utf-8"
    // })

    // console.log(request.url);
    // if(request.url == "/products"){
    //     response.end(JSON.stringify(product.getProduct));
    // }
    // else{
    //     response.end("<h1>Hello World</h1>");
    // }

    if(request.method === "GET"){
        handleGetRequest(request, response);
    }
    else if(request.method === "POST"){
        
    }
    else if(request.method === "DELETE"){
        
    }
    else if(request.method === "UPDATE"){
        
    }
    else{
        handleErrorRequest(response, statusCode, message);
    }
})

server.listen(3000, function(){
    console.log("server started...");
})

//#endregion MAIN


