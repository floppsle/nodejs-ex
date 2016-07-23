//  OpenShift sample Node application
var express = require('express'),
    fs      = require('fs'),
    app     = express(),
    coap = require('coap'),
//server = coap.createServer(),
    get_ip = require('ipware')().get_ip;

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 1235,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res) {
    res.end("hallo");
});

app.listen(port, ip);


/*var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port + ' - ' + message);

});

 server.bind(port, ip);*/


// the default CoAP port is 5683
/*server.listen();
 server.on('request', function (req, res) {
 console.log("Got request from " + get_ip(req).clientIp);
 res.end('Hello ' + req.url.split('/')[1] + '\n')
 })

 app.get('/', function (req, res) {
 res.end("hallo");
 });

 app.listen(port, ip);
 console.log('Server running on http://%s:%s', ip, port);
 */
module.exports = app ;

/*
 mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
 mongoURLLabel = "";
 initDb(function(err){
 console.log('Error connecting to Mongo. Message:\n'+err);
 });
 /*if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
 var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
 mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
 mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
 mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
 mongoPassword = process.env[mongoServiceName + '_PASSWORD']
 mongoUser = process.env[mongoServiceName + '_USER'];

 if (mongoHost && mongoPort && mongoDatabase) {
 mongoURLLabel = mongoURL = 'mongodb://';
 if (mongoUser && mongoPassword) {
 mongoURL += mongoUser + ':' + mongoPassword + '@';
 }
 // Provide UI label that excludes user id and pw
 mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
 mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;

 }
 }
 var db = null,
 dbDetails = new Object();

 var initDb = function(callback) {
 if (mongoURL == null) return;

 var mongodb = require('mongodb');
 if (mongodb == null) return;

 mongodb.connect(mongoURL, function(err, conn) {
 if (err) {
 callback(err);
 return;
 }

 db = conn;
 dbDetails.databaseName = db.databaseName;
 dbDetails.url = mongoURLLabel;
 dbDetails.type = 'MongoDB';

 console.log('Connected to MongoDB at: %s', mongoURL);
 });
 };
 */