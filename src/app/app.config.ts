import dotenv from "dotenv";

dotenv.config(); //会默认载入根目录下的env文件

/**
 * 应用配置
 */

export const { APP_PORT } = process.env;

/**
 * 数据仓库配置
 */
export const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;

/**
 * 密钥配置
 */
export let { PRIVATE_KEY, PUBLIC_KEY } = process.env;
//将base64处理的密钥还原成之前的
PRIVATE_KEY = Buffer.from(PRIVATE_KEY, "base64").toString();
PUBLIC_KEY = Buffer.from(PUBLIC_KEY, "base64").toString();

/**内容分页 */
export const POSTS_PER_PAGE = parseInt(process.env["POSTS_PER_PAGE"], 10);
