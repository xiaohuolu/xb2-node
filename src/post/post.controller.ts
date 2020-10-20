import { Request, Response, NextFunction } from 'express'; //引入接口、处理器、参数需要的类型
import { getPosts } from './post.service';

/**
 * 内容列表
 */
export const index = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (request.headers.authorization !== 'SECRET') {
    return next(new Error()); //如果不加return 会继续执行这个接口处理器的其他代码
  }
  const posts = getPosts();
  response.send(posts);
};
