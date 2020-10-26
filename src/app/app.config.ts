import dotenv from 'dotenv';

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
    MYSQL_POST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = process.env;