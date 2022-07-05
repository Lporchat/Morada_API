import { CommentRepository } from "../../infra/repositories/CommentRepository";
import { ICommentRepository } from "../../infra/repositories/ICommentRepository";
class UpdatedCommentUseCase {
  private CommentReposirory: ICommentRepository;
  constructor() {
    this.CommentReposirory = new CommentRepository();
  }

  async execute(id: string, comment: string): Promise<void> {
    console.log(id, comment);
    await this.CommentReposirory.updated({ id, comment });
  }
}

export { UpdatedCommentUseCase };
