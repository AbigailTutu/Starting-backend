const http = require("http");

const handleAllRequests = (requestObject, responseObject) => {
    console.log("Hi this is Abi, first time doing backend");
    
    const url = requestObject.url;
    if(url === "/"){
        responseObject.write("<h1>This is the home page</h2>");
    }else if(url === "/login"){
        responseObject.write("This is the login page");
    }else if (url === "/signup"){
        responseObject.write("Welcome to the sign uo")
    }else {
        responseObject.write("<h1>Page not found</h1>")
    }
    responseObject.write("<h1>This is my first response \n</h1>");
    responseObject.write('Another response')
    responseObject.end();
}

const server = http.createServer(handleAllRequests);

server.listen(3000, "localhost", () => {console.log("Server is ready for a respond")});