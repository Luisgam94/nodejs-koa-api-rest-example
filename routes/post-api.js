const uuid = require('uuid');

let posts = new Map();

const createPost = (object) => {

    let post = {
        id: uuid.v4(),
        data: new Date(),
        name: object.name,
        description: object.description

    };

    posts.set(post.id,post);
    return posts;
}

module.exports = {
    createPost
}