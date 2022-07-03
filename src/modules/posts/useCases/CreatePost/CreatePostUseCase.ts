import { IPostRepository } from "../../infra/repositorires/IPostRepository";
import { PostRepository } from "../../infra/repositorires/PostRepository";
import { Posts } from "../../infra/typeorm/entities/posts";

class CreatePostUseCase {
  private postReposirory: IPostRepository;
  constructor() {
    this.postReposirory = new PostRepository();
  }

  async execute(name: string): Promise<Posts> {
    const post = await this.postReposirory.create(name);

    return post;
  }
}

export { CreatePostUseCase };
