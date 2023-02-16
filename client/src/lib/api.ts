import { enterWorkUrl } from "./urls";
import axios from "axios";

export const createNewEntry = async ({
  usrId,
  companyId,
}: {
  usrId: string;
  companyId: string;
}): Promise<{ id: string }> =>
  await (
    await axios.post(`${enterWorkUrl}/${companyId}/${usrId}`)
  ).data;
