"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserData = async (request, response, next) => {
    console.log('验证用户数据');
    const { name, password } = request.body;
    if (!name)
        return next(new Error('NAME_IS_REQUIRED'));
    if (!password)
        return next(new Error('PASSWORD_IS_REQUIRED'));
    next();
};
//# sourceMappingURL=user.middleware.js.map