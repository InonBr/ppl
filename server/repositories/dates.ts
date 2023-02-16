import UserDateDataModel from "../models/UserDateDataModel";

export const createNewEntry = async ({
  userId,
  companyId,
}: {
  companyId: string;
  userId: string;
}) => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const formattedDate = `${day}/${month}/${today.getFullYear()}`;

  const hours = today.getHours().toString().padStart(2, "0");
  const minutes = today.getMinutes().toString().padStart(2, "0");
  const seconds = today.getSeconds().toString().padStart(2, "0");

  const newEntryData = new UserDateDataModel({
    companyId,
    userId,
    dayDate: formattedDate,
    enterTime: `${hours}:${minutes}:${seconds}`,
  });

  await newEntryData.save();

  const { _id } = newEntryData;

  return _id.toString();
};
