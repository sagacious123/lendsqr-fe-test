import { IResponse, User } from "store/auth";

export type UsersList = User[];

export interface GetUsersPayload {
  offset?: number;
  limit?: number;
}
