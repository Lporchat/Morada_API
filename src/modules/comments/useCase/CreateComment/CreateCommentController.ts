import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateCommentUseCase } from "./CreateCommentUseCase";

class CreateCommentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name_user, post_id, comment } = req.body;

    

    if (!name_user || !post_id || !comment) {
      throw new AppError("Nenhuma informação inserida!");
    }

    const createCommentUseCase = new CreateCommentUseCase();

    const comment_post = await createCommentUseCase.execute({
      name_user,
      post_id,
      comment,
    });

    return res.status(201).json(comment_post);
  }
}

export { CreateCommentController };
