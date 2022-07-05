import { CommentRepository } from "../../infra/repositories/CommentRepository";
import { ICommentRepository } from "../../infra/repositories/ICommentRepository";

class DeleteCommentUseCase {
  private CommentReposirory: ICommentRepository;
  constructor() {
    this.CommentReposirory = new CommentRepository();
  }

  async execute(id: string): Promise<void> {
    await this.CommentReposirory.delete(id);
  }
}

export { DeleteCommentUseCase };
