import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { UpdatedPostUseCase } from "./UpdatedPostUseCase";

class UpdatedPostController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id, name, body } = req.body;

    if (!id) {
      throw new AppError("Nenhum ID inserido!");
    }

    if (!name) {
      throw new AppError("Nenhum Nome inserido!");
    }

    if (!body) {
      throw new AppError("Nenhum corpo inserido!");
    }

    const updatedPostUseCase = new UpdatedPostUseCase();

    const post = await updatedPostUseCase.execute(id, name, body);

    return res.status(200).send(post);
  }
}

export { UpdatedPostController };
