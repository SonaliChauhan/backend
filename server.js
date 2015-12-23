/**
 * Created by Sonali on 14-12-2015.
 */
var Hapi = require('hapi'),
    Routes=require('./routes/userRoutes'),
    config=require('./config/serverPort');

var server = new Hapi.Server();
server.connection({
    port: config.PortSetting.port,
    host:config.PortSetting.host

});


server.register(require('hapi-swagger'), function (err) {
    if (err) {
        console.error('Failed to load plugin:', err);
    }
    server.start(function () {
        console.log('Server running at:', server.info.uri);
    });
});
Routes.forEach(routes => {
    server.route(routes);
});
