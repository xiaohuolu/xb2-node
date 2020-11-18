import request from "supertest";
import bcrypt from "bcrypt";
import app from "../app";
import { connection } from "../app/database/mysql";
import { signToken } from "../auth/auth.service";
import { deleteUser, getUserById } from "./user.service";
import { UserModel } from "./user.model";

/**
 * 准备测试
 */

//测试的时候需要创建一个测试的用户
const testUser: UserModel = {
  name: "xb2-test-user-name",
  password: "111111",
};

//用户更新的测试
const testUserUpdate: UserModel = {
  name: "xb2-test-user-new-name",
  password: "222222",
};

//把创建的测试用户交给它，等测试完成的时候删除这些用户
let testUserCreated: UserModel;

/**
 * 所有测试结束后
 */
afterAll(async () => {
  //删除测试用户
  if (testUserCreated) {
    await deleteUser(testUserCreated.id);
  }

  //断开数据服务连接
  connection.end();
});
