const product = require("./products");
const { handleErrorRequest } = require("./middleError");
function Middleware(){

}

function handleGetRequest(req, res){
    res.setHeader("Content-Type", "application/json; charset= UTF-8");
    res.statusCode = 200;
    if(req.url === "/products"){
        res.end(JSON.stringify(product.getProduct));
    }
    else{
        handleErrorRequest(res, 404, `${req.url} doesn't exist in your router`);
    }
}

function handlePostRequest(req, res){

}

function handleDeleteRequest(req, res){

}

function handleUpdateRequest(req, res){

}

Middleware.prototype.handleGetRequest = handleGetRequest;
Middleware.prototype.handlePostRequest = handlePostRequest;
Middleware.prototype.handleDeleteRequest = handleDeleteRequest;
Middleware.prototype.handleUpdateRequest = handleUpdateRequest;

module.exports = new Middleware();