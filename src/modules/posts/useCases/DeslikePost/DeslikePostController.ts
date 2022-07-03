import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { DeslikePostUseCase } from "./DeslikePostUseCase";

class DeslikePostController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    if (!id) {
      throw new AppError("Nenhum ID inserido!");
    }

    const deslikePostUseCase = new DeslikePostUseCase();

    const deslike = await deslikePostUseCase.execute(id);

    if (!deslike) {
      throw new AppError("O post não tem nenhum like!");
    }

    return res.status(200).send();
  }
}

export { DeslikePostController };
