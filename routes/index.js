const { createRouterStatus } = require('./statusRoutes');


const useRoute = (app,router) => {
    //const { prefix } = options;
    //router.prefix(prefix);
    app.use(router.routes());
    app.use(router.allowedMethods());
    return app;
};

const useRoutes = (args = {}) => {
    const { app } = args;
    useRoute(app, createRouterStatus());
//    args.log.info('Routes Loaded');
    return app;
};

module.exports = {
    useRoutes
}