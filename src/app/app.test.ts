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
