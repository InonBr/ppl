import { object, string } from "yup";

export const paramsSchema = object().shape({
  id: string().required(),
  companyId: string().required(),
});

export const idParamsSchema = object().shape({
  id: string().required(),
});
