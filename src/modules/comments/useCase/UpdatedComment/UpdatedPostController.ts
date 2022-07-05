import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { UpdatedCommentUseCase } from "./UpdatedPostUseCase";

class UpdatedCommentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id, comment } = req.body;

    if (!id || !comment) {
      throw new AppError("Nenhuma informação inserido!");
    }

    const updatedCommentUseCase = new UpdatedCommentUseCase();

    await updatedCommentUseCase.execute(id, comment);

    return res.status(200).send();
  }
}

export { UpdatedCommentController };
