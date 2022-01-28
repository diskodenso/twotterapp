// server.js need to be create in the route of our file

// entry point 
const express = require(`express`);
const serveStatic = require(`serve-static`);
const history = require(`connect-history-api-fallback`);
const enforce = require(`express-sslify`);

const app = express();

// running middleware
// enforce.HTTPS is gonna force the users to use the secure version of website
// secure access point to use
app.use(enforce.HTTPS({ trustProtoHeader: true }));
// serveStativ is serving all our files
app.use(serveStatic(__dirname + `/dist`));

app.use(history());
// app.listen is running the application
// process.env.Port = we are using the port horuku gives us
// or as a fallback port 5000
app.listen(process.env.PORT || 5000);