import { Request, Response, NextFunction } from 'express'; //引入接口、处理器、参数需要的类型
import { getPosts } from './post.service';

/**
 * 内容列表
 */
export const index = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const posts = await getPosts();
  response.send(posts);
  } catch (error) {
    next(error)
  }
};
