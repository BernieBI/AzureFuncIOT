const azure = require('azure-storage');

module.exports = async function (context, req) {

    const states = ['open', 'closed']; 

    if ( req.query.state && states.includes(req.query.state)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: (req.query.state || req.body.state) + " the curtains"
        };

        context.bindings.myOutputBlob = req.query.state;
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a valid state"
        };
        return;
    }
    context.done();
};