import { CommentRepository } from "../../infra/repositories/CommentRepository";
import {
  ICommentRepository,
  IComments,
} from "../../infra/repositories/ICommentRepository";
import { Comments } from "../../infra/typeorm/entities/comments";

class CreateCommentUseCase {
  private postReposirory: ICommentRepository;
  constructor() {
    this.postReposirory = new CommentRepository();
  }

  async execute(data: IComments): Promise<Comments> {
    const comment = await this.postReposirory.create(data);
    return comment;
  }
}

export { CreateCommentUseCase };
