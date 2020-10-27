import { UserModel } from './user.model';
export declare const createUser: (user: UserModel) => Promise<import("mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql/lib/protocol/packets/OkPacket") | import("mysql/lib/protocol/packets/OkPacket")[] | import("mysql/lib/protocol/packets/ResultSetHeader")>;
export declare const getUserByName: (name: string) => Promise<any>;
