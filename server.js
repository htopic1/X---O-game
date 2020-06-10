var port = process.env.port || 5000
var express = require('express')
var app = express()

var http = require('http')
var server = http.Server(app)

app.use(express.static('client'))

server.listen(port, function(){
    console.log('running');
    
})