import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, body } = req.body;

    if (!name || !body) {
      throw new AppError("Nenhuma informação inserido!");
    }

    const createPostUseCase = new CreatePostUseCase();

    const post = await createPostUseCase.execute(name, body);

    return res.status(201).json(post);
  }
}

export { CreatePostController };
