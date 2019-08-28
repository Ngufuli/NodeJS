let http = require('http');
let fs = require('fs');

onRequest = (req, res)=>{
    if(req.url === '/favicon.ico'){
        return res.end("Favicon");
    }
    console.log("Incoming requst to " + req.url);

    var i = 2;
    //response headers
    res.writeHead(200, {'Content-Type': 'text/plain'});

    setTimeout(()=>{
        fs.readFile(__filename, {encoding: 'utf8'}, (err, htmlFile)=>{
            if(err){
                console.log(err);
                return res.end();
            }
            console.log('Sending response for' + req.url);
            res.end(htmlFile);
        })
    },10000);

    while(i--){
        console.log('Loop value: ' + i + '\r');
    }
}
let server = http.createServer(onRequest);
server.listen(1234, ()=>{
    console.log(`Server has started on port 1234...`);
});