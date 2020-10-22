const https = require('http');
const routes = require('../src/routes/posts.routes');
const router = require('../src/routers/posts.routers');

const options = {
    hostname: '127.0.0.1',
    port:  process.env.port || 3000,
    path: '/',
    method: 'GET'
};

process.on('uncaughtException', function(err) {
    console.log('uncaughtException');
    console.error(err.stack);
    console.log(err);
});


https.createServer(options,(request,response)=>{   
    response.writeHead(200,{'content-type':'text/json'});
    response.write(`Kwena backend running on port ${options.hostname} : ${options.port} with new options variable`);
    response.end();
    //router(request, response, routes);
    //const PORT = process.env.PORT || 5000;
}).listen(options.port, ()=>{
    console.log(`Server running on port ${options.port}....`);
});

