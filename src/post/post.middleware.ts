import { Request, Response, NextFunction } from "express";
import { POSTS_PER_PAGE } from "../app/app.config";

/**
 *  排序方式
 */
export const sort = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 获取客户端的排序方式
  const { sort } = request.query;

  // 排序用的sql
  let sqlSort: string;

  // 设置培训用的sql
  switch (sort) {
    case "earliest":
      sqlSort = "post.id ASC";
      break;
    case "latest":
      sqlSort = "post.id DESC";
      break;
    case "most_comments":
      sqlSort = "totalComments DESC ,post.id DESC";
      break;

    default:
      sqlSort = "post.id DESC";
      break;
  }

  //   在请求中添加排序
  request.sort = sqlSort;

  //   下一步
  next();
};

/**
 *  过滤列表
 */
export const filter = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 解构查询符
  const { tag, user, action } = request.query;

  // 设置默认的过滤
  request.filter = {
    name: "default",
    sql: "post.id IS NOT NULL",
  };

  //   按标签名过滤
  if (tag && !user && !action) {
    request.filter = {
      name: "tagName",
      sql: "tag.name = ?",
      param: tag,
    };
  }

  //   过滤出用户发布的内容
  if (user && action == "published" && !tag) {
    request.filter = {
      name: "userPublished",
      sql: "user.id=?",
      param: user,
    };
  }
  //   下一步
  next();
};
