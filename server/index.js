const { useRoutes } = require('../routes')
const Koa = require('Koa');
//const bodyparser = require('koa-bodyparser');

let app;

const starServer = async () => {
    app = new Koa();

    //app.use(bodyparser());

    const arg = {
        app
    }

    useRoutes(arg);


    app.listen(3000, function(){
      console.log('Server running on https://localhost:3000')
    });

    return app;
}

module.exports = {
    starServer
}
