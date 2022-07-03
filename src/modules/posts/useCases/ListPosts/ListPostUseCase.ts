
import { IPostRepository } from "../../infra/repositories/IPostRepository";
import { PostRepository } from "../../infra/repositories/PostRepository";
import { Posts } from "../../infra/typeorm/entities/posts";

class ListPostUseCase {
  private postReposirory: IPostRepository;
  constructor() {
    this.postReposirory = new PostRepository();
  }

  async execute(): Promise<Posts[]> {
    const list = await this.postReposirory.list();
    return list;
  }
}

export { ListPostUseCase };
