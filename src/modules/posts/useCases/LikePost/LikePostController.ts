import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { LikePostUseCase } from "./LikePostUseCase";

class LikePostController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    if (!id) {
      throw new AppError("Nenhum ID inserido!");
    }

    const likePostUseCase = new LikePostUseCase();

    await likePostUseCase.execute(id);

    return res.status(200).send();
  }
}

export { LikePostController };
