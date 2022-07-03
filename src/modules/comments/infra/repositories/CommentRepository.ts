import { getRepository, Repository } from "typeorm";
import { Comments } from "../typeorm/entities/comments";
import { ICommentRepository, IComments } from "./ICommentRepository";

class CommentRepository implements ICommentRepository {
  private repository: Repository<Comments>;

  constructor() {
    this.repository = getRepository(Comments);
  }

  async create(data: IComments): Promise<Comments> {
    const comment = await this.repository.create(data);
    await this.repository.save(comment);
    return comment;
  }
  updated(data: IComments): Promise<Comments> {
    throw new Error("Method not implemented.");
  }
  delete({ post_id }: IComments): Promise<void> {
    throw new Error("Method not implemented.");
  }
  list({ post_id }: IComments): Promise<Comments[]> {
    throw new Error("Method not implemented.");
  }
}

export { CommentRepository };
