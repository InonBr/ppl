import { Request, Response, Router } from "express";
import { idParamsSchema } from "../systems/schemas";
import { getUsersWorkStatus } from "../repositories/usrs";
import { ValidationError } from "yup";

const usersRouter = Router();

usersRouter.get("/workStatus/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await idParamsSchema.validate(
      { id },
      {
        abortEarly: false,
        stripUnknown: true,
      }
    );

    const { workingStatus } = await getUsersWorkStatus(id);

    res.send({ workingStatus });
  } catch (err) {
    if (err instanceof ValidationError) {
      return res.status(400).json({ errors: err.errors });
    }

    const error = err as Error;
    return res.status(500).json({ msg: error.message });
  }
});

export default usersRouter;
