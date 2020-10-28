import express from "express";
import { authGuard } from "src/auth/auth.middleware";
import * as fileController from "./file.controller";
import { fileInterceptor } from "./file.middleware";

const router = express.Router();

/**
 * 上传文件
 */
router.post("/files", authGuard, fileInterceptor, fileController.store);

/**
 * 导出路由
 */
export default router;
