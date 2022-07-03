import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { DeletePostUseCase } from "./DeletePostUseCase";

class DeletePostController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    if (!id) {
      throw new AppError("Nenhum ID inserido!");
    }

    const deletePostUseCase = new DeletePostUseCase();

    await deletePostUseCase.execute(id);

    return res.status(200).send();
  }
}

export { DeletePostController };
