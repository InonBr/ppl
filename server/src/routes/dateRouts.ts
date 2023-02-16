import { Request, Response, Router } from "express";
import { ValidationError } from "yup";
import { paramsSchema } from "../systems/schemas";
import { createNewEntry } from "../repositories/dates";
import { updateUsersWorkingStatus } from "../repositories/usrs";

const datesRouter = Router();

datesRouter.post(
  "/enterWork/:companyId/:id",
  async (req: Request, res: Response) => {
    try {
      const { id, companyId } = req.params;

      await paramsSchema.validate(
        { id, companyId },
        {
          abortEarly: false,
          stripUnknown: true,
        }
      );

      const newMongoId = await createNewEntry({ userId: id, companyId });
      updateUsersWorkingStatus(id);

      res.send({ newMongoId, id, companyId });
    } catch (err) {
      if (err instanceof ValidationError) {
        return res.status(400).json({ errors: err.errors });
      }

      const error = err as Error;
      return res.status(500).json({ msg: error.message });
    }
  }
);

export default datesRouter;
