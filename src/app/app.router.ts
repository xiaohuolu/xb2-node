import express, { response } from "express";
import { request } from "http";

const router = express.Router();

router.get("/", (request, response) => {
  response.send({ title: "服务之路" });
});

router.post("/echo", (request, response) => {
  response.status(201).send(request.body);
});

/**
 * 导出路由
 */
export default router;
