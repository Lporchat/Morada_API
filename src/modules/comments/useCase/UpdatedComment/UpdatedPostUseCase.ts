import { CommentRepository } from "../../infra/repositories/CommentRepository";
import { ICommentRepository } from "../../infra/repositories/ICommentRepository";
import { Comments } from "../../infra/typeorm/entities/comments";
class UpdatedCommentUseCase {
  private CommentReposirory: ICommentRepository;
  constructor() {
    this.CommentReposirory = new CommentRepository();
  }

  async execute(id: string, comment: string): Promise<Comments> {
    const commentEdited = await this.CommentReposirory.updated({ id, comment });
    return commentEdited;
  }
}

export { UpdatedCommentUseCase };
