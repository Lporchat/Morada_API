import { SimpleConsoleLogger } from "typeorm";
import { IPostRepository } from "../../infra/repositories/IPostRepository";
import { PostRepository } from "../../infra/repositories/PostRepository";

class UpdatedPostUseCase {
  private postReposirory: IPostRepository;
  constructor() {
    this.postReposirory = new PostRepository();
  }

  async execute(id: string, name: string): Promise<void> {
    await this.postReposirory.updated(id, name);
  }
}

export { UpdatedPostUseCase };
