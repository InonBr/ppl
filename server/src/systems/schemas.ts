import { object, string } from "yup";

export const paramsSchema = object().shape({
  id: string().required(),
  companyId: string().required(),
});
