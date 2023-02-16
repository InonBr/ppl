import UsersDataModel from "../models/UsersDataModel";
import { UsersWorkingStatus } from "../systems/utils";

export const getUsersWorkStatus = async (
  id: string
): Promise<UsersWorkingStatus> =>
  (await UsersDataModel.findById(id).select(
    "workingStatus"
  )) as any as Promise<UsersWorkingStatus>;

export const updateUsersWorkingStatus = async (id: string) => {
  const { workingStatus } = await getUsersWorkStatus(id);
  await UsersDataModel.findByIdAndUpdate(
    { _id: id },
    { workingStatus: !workingStatus }
  );
};
