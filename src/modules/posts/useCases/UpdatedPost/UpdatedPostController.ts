import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { UpdatedPostUseCase } from "./UpdatedPostUseCase";

class UpdatedPostController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id, name } = req.body;

    if (!id) {
      throw new AppError("Nenhum ID inserido!");
    }

    if (!name) {
      throw new AppError("Nenhum Nome inserido!");
    }

    const updatedPostUseCase = new UpdatedPostUseCase();

    await updatedPostUseCase.execute(id, name);

    return res.status(200).send();
  }
}

export { UpdatedPostController };
