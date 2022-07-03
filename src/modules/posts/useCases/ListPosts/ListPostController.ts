import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { ListPostUseCase } from "./ListPostUseCase";

class ListPostController {
  async handle(req: Request, res: Response): Promise<Response> {

    const listPostUseCase = new ListPostUseCase();

    const list = await listPostUseCase.execute();

    return res.status(200).json(list);
  }
}

export { ListPostController };
