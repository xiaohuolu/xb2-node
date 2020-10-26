"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_service_1 = require("./post.service");
exports.index = async (request, response, next) => {
    try {
        const posts = await post_service_1.getPosts();
        response.send(posts);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=post.controller.js.map