import { TokenPayload } from "../src/auth/auto.interface";

declare global {
  namespace Express {
    export interface Request {
      user: TokenPayload;
    }
  }
}
