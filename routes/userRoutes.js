/**
 * Created by Sonali on 23-12-2015.
 */
var routes=[
    {
        method: 'GET',
        path: '/hello',
        handler: function (request, reply) {
            reply('Hello!');
        }
    },
    {
        method: 'GET',
        path: '/bye',
        handler: function (request, reply) {
            reply('bye!');
        }
    }
]
module.exports=[routes];