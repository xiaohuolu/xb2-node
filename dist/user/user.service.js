"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("../app/database/mysql");
exports.createUser = async (user) => {
    const statement = `
    INSERT INTO user
    SET ? 
  `;
    const [data] = await mysql_1.connection.promise().query(statement, user);
    return data;
};
//# sourceMappingURL=user.service.js.map