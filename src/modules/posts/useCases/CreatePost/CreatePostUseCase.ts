import { IPostRepository } from "../../infra/repositories/IPostRepository";
import { PostRepository } from "../../infra/repositories/PostRepository";
import { Posts } from "../../infra/typeorm/entities/posts";

class CreatePostUseCase {
  private postReposirory: IPostRepository;
  constructor() {
    this.postReposirory = new PostRepository();
  }

  async execute(name: string, body: string): Promise<Posts> {
    const post = await this.postReposirory.create(name, body);

    return post;
  }
}

export { CreatePostUseCase };
