import { SimpleConsoleLogger } from "typeorm";
import { IPostRepository } from "../../infra/repositories/IPostRepository";
import { PostRepository } from "../../infra/repositories/PostRepository";
import { Posts } from "../../infra/typeorm/entities/posts";

class UpdatedPostUseCase {
  private postReposirory: IPostRepository;
  constructor() {
    this.postReposirory = new PostRepository();
  }

  async execute(id: string, name: string, body: string): Promise<Posts> {
    const post = await this.postReposirory.updated(id, name, body);
    return post;
  }
}

export { UpdatedPostUseCase };
