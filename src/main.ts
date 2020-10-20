/**
 *  这个文件可以作为应用主要的入口文件
 */
import app from './app';
import { APP_PORT } from './app/app.config';

app.listen(APP_PORT, () => {
  console.log('服务已启动~' + APP_PORT);
});
