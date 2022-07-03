import { SimpleConsoleLogger } from "typeorm";
import { IPostRepository } from "../../infra/repositorires/IPostRepository";
import { PostRepository } from "../../infra/repositorires/PostRepository";

class DeslikePostUseCase {
  private postReposirory: IPostRepository;
  constructor() {
    this.postReposirory = new PostRepository();
  }

  async execute(id: string): Promise<boolean> {
    return await this.postReposirory.deslike(id);
  }
}

export { DeslikePostUseCase };
