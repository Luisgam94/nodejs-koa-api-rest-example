const statusReturn = async (ctx) => {

    //const name= ctx.request.body.nombre;

    ctx.response.body = {
        name: ctx.request.body.name,
        description: ctx.request.body.description
    }


}

module.exports = {
    statusReturn
}