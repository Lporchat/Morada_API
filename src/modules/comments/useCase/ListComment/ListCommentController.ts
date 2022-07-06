import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { ListCommentUseCase } from "./ListCommentUseCase";

class ListCommentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { post_id } = req.body;

    const listCommentUseCase = new ListCommentUseCase();

    const comments = await listCommentUseCase.execute({ post_id });

    return res.status(200).json(comments);
  }
}

export { ListCommentController };
