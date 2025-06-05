var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    if (request.url === "/") {
        response.write("<h1>Bem-vindo ao meu site pessoal!</h1>");
        response.end();
    } else if (request.url === "/artigos") {
        var filePath = path.join(__dirname, '/artigos.html');
        fs.readFile(filePath, function (err, html) {
            response.write(html);
            response.end();
        }
        )
    } else if (request.url === "/contato") {
        var filePath = path.join(__dirname, '/contato.html');
        fs.readFile(filePath, function (err, html) {
            response.write(html);
            response.end();
        })
    } else if (request.url === "/erro") {
        var filePath = path.join(__dirname, '/erro.html');
        fs.readFile(filePath, function (err, html) {
            response.write(html);
            response.end();
        })
    } else {
        response.write("<h1>Página não encontrada!</h1>");
        response.end();
    }
});
server.listen(3000, function () {
    console.log("Servidor rodando na porta 3000!");
});
