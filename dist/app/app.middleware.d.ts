import { Request, Response, NextFunction } from 'express';
export declare const requestUrl: (request: Request<import("express-serve-static-core").ParamsDictionary>, response: Response<any>, next: NextFunction) => void;
export declare const defaultErrorHandler: (error: any, request: Request<import("express-serve-static-core").ParamsDictionary>, response: Response<any>, next: NextFunction) => void;
