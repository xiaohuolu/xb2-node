import { Request, Response, NextFunction } from "express";

/**
 * 输出请求地址
 */
export const requestUrl = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log(request.url);
  next(); //执行以下next，这样这个请求才会继续被其他的中间件和接口处理器去处理,如果不执行的话会一直卡在这里
};

/**
 * 默认异常处理器
 */
export const defaultErrorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error.message) {
    console.log(error.message);
  }
  let statusCode: number, message: string;

  /**
   * 处理异常
   */
  switch (error.message) {
    case "NAME_IS_REQUIRED":
      statusCode = 400;
      message = "请提供用户名";
      break;
    case "PASSWORD_IS_REQUIRED":
      statusCode = 400;
      message = "请提供用户密码";
      break;
    case "USER_ALREADY_EXIST":
      statusCode = 409;
      message = "用户名已被占用";
      break;
    case "USER_DOES_NOT_EXIST":
      statusCode = 400;
      message = "用户不存在";
      break;
    case "PASSWORD_DOES_NOT_MATCH":
      statusCode = 400;
      message = "密码不对";
      break;
    case "UNAUTHORIZED":
      statusCode = 401;
      message = "请先登录";
      break;
    case "USER_DOES_NOT_OWN_RESOURCE":
      statusCode = 403;
      message = "您不能处理这个内容";
      break;
    case "FILE_NOT_FOUND":
      statusCode = 404;
      message = "文件不存在";
      break;
    case "TAG_ALREADY_EXISTS":
      statusCode = 400;
      message = "标签已存在";
      break;
    case "POST_ALREADY_HAS_THIS_TAG":
      statusCode = 400;
      message = "内容已经有这个标签了";
      break;
    case "UNABLE_TO_REPLY_THIS_COMMENT":
      statusCode = 400;
      message = "无法回复这条评论";
      break;
    case "FILE_TYPE_NOT_ACCEPT":
      statusCode = 400;
      message = "不能上传此类型文件";
      break;
    case "NOT_FOUND ":
      statusCode = 404;
      message = "没找到~~";
      break;
    default:
      statusCode = 500;
      message = "服务暂时出了点问题~";
      break;
  }
  response.status(statusCode).send({ message });
};
