import { CommentRepository } from "../../infra/repositories/CommentRepository";
import {
  ICommentRepository,
  IComments,
} from "../../infra/repositories/ICommentRepository";
import { Comments } from "../../infra/typeorm/entities/comments";

class ListCommentUseCase {
  private commentReposirory: ICommentRepository;
  constructor() {
    this.commentReposirory = new CommentRepository();
  }

  async execute({ post_id }: IComments): Promise<Comments[]> {
    
    const comments = await this.commentReposirory.list({ post_id });
    return comments;
  }
}

export { ListCommentUseCase };
