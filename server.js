let http = require('http');

onRequest = (req, res)=>{
    res.writeHead(200, {'Content-Type': 'Text/plain'});
    res.end("Hello world");
}

let server = http.createServer(onRequest);
server.listen(1234, ()=>{
    console.log(`Server has started on port 1234...`);
});