const Router = require('koa-router');
const koaBody = require('koa-body');
const { createPost } = require('./post-api')
const { statusReturn } = require('../services/statusService')
const { schema } = require('../schemas/statusSchema')
const { useValidation } = require('../utils/validator');


const handlerVoucher = useValidation(
    [
        { property: 'request.body', scheme: schema}
    ], statusReturn
)

const createRouterStatus = () => {
    const router = new Router(/*{
        prefix: '/home'
    }*/);
    router.get('/status/healthy',(ctx) => {
        ctx.body = "hola healthy";
        console.log(ctx.body);
    })

    router.get('/status/alive',() => {
        console.log("hola healthy");

    })

    router.get('/',(ctx) => {
        ctx.body = "hola body";

    })

    router.post('/save', koaBody(), (ctx)=>{
        const req1 = JSON.stringify(ctx.request.body)
        console.log(ctx.request.body)
        const request = {
            name: ctx.request.body.name,
            description: ctx.request.body.description
        }
        const {error, value} = schema.validate(request);
        console.log(error);
        console.log('aaaaa',value)

        if(error) {
            ctx.response.body = 404;
            ctx.body = {
                message: error.message
            };
        } else {
            ctx.response.body = 200;
            ctx.body = value;
        }

        //ctx.response.body = 200;
        //ctx.body = value;

    })

    /*router.post('/save',handlerVoucher/*koaBody, (ctx) => {
        console.log(JSON.stringify(ctx.request.body));
        let post = createPost(ctx.request.body);
        //post = createPost(post);

        console.log(post)
        ctx.response.status = 201;
        ctx.body = ctx.request.body;
    }*///)

    return router;


}

module.exports = {
    createRouterStatus
}

