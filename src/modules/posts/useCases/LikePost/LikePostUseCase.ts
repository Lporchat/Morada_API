import { SimpleConsoleLogger } from "typeorm";
import { IPostRepository } from "../../infra/repositorires/IPostRepository";
import { PostRepository } from "../../infra/repositorires/PostRepository";

class LikePostUseCase {
  private postReposirory: IPostRepository;
  constructor() {
    this.postReposirory = new PostRepository();
  }

  async execute(id: string): Promise<void> {
    await this.postReposirory.like(id);
  }
}

export { LikePostUseCase };
