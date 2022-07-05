import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { DeleteCommentUseCase } from "./DeleteCommentUseCase";

class DeleteCommentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    if (!id) {
      throw new AppError("Nenhum ID inserido!");
    }

    const deleteCommentUseCase = new DeleteCommentUseCase();

    await deleteCommentUseCase.execute(id);

    return res.status(200).send();
  }
}

export { DeleteCommentController };
