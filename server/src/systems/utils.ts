import { ObjectId } from "mongoose";

export interface UsersWorkingStatus {
  _id: ObjectId;
  workingStatus: boolean;
}
