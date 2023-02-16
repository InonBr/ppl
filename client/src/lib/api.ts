import { enterWorkUrl, workingStatusUrl } from "./urls";
import axios from "axios";

export const getUsersWorkingStatus = async (
  userId: string
): Promise<{ workingStatus: boolean }> =>
  await (
    await axios.get(`${workingStatusUrl}/${userId}`)
  ).data;

export const createNewEntry = async ({
  userId,
  companyId,
}: {
  userId: string;
  companyId: string;
}): Promise<{ id: string }> =>
  await (
    await axios.post(`${enterWorkUrl}/${companyId}/${userId}`)
  ).data;
