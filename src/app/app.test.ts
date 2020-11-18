import request from "supertest";
import app from "../app";
import { connection } from "./database/mysql";
import { greet } from "./playground/demo";

/**
 * 单元测试
 */

//使用describe组织一组测试，第一个参数是这次测试的标题，第二个参数是回调函数，在函数中可以使用test方法创建测试
//test第一个参数是标题，第二个参数也是回调函数，在回调函数里可以断言。
describe("演示单元测试", () => {
  // 测试
  test("测试greet函数", () => {
    // 准备
    const greeting = greet("陈奕迅");

    // 断言
    expect(greeting).toBe("你好，陈奕迅"); //这里的意思是我们断言greeting执行后的结果等于 你好，陈奕迅
  });
});

/**
 * 测试接口
 */
describe("演示接口测试", () => {
  // 测试后要断开连接，否则会卡住

  //在所有测试以后会执行这个方法
  afterAll(async () => {
    // 断开数据服务连接
    connection.end();
  });

  test("测试 GET /", async () => {
    //   请求接口
    // response表示请求接口得到的响应，请求接口可以用request这个方法然后把app交给它，这样就可以请求应用里的接口了。
    const response = await request(app).get("/"); //用get方法请求 "/"

    // 做出断言
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ title: "服务之路" });
  });

  test("测试 POST /echo", async () => {
    //   请求接口
    const response = await request(app)
      .post("/echo")
      .send({ message: "你好~" }); //在请求里面包含的数据可以交给send方法

    //   做出断言
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      message: "你好~",
    });
  });
});
