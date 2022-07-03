import { SimpleConsoleLogger } from "typeorm";
import { IPostRepository } from "../../infra/repositories/IPostRepository";
import { PostRepository } from "../../infra/repositories/PostRepository";

class DeletePostUseCase {
  private postReposirory: IPostRepository;
  constructor() {
    this.postReposirory = new PostRepository();
  }

  async execute(id: string): Promise<void> {
    await this.postReposirory.delete(id);
  }
}

export { DeletePostUseCase };
