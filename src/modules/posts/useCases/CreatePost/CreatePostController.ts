import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const createPostUseCase = new CreatePostUseCase();

    const post = await createPostUseCase.execute(name);

    return res.status(201).json(post);
  }
}

export { CreatePostController };
