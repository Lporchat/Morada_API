import { CommentRepository } from "../../infra/repositories/CommentRepository";
import {
  ICommentRepository,
  IComments,
} from "../../infra/repositories/ICommentRepository";
import { Comments } from "../../infra/typeorm/entities/comments";

class CreateCommentUseCase {
  private commentReposirory: ICommentRepository;
  constructor() {
    this.commentReposirory = new CommentRepository();
  }

  async execute(data: IComments): Promise<Comments> {
    const comment = await this.commentReposirory.create(data);
    return comment;
  }
}

export { CreateCommentUseCase };
