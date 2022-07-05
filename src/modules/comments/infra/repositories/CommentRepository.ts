import { getRepository, Repository } from "typeorm";
import { Comments } from "../typeorm/entities/comments";
import { ICommentRepository, IComments } from "./ICommentRepository";

class CommentRepository implements ICommentRepository {
  private repository: Repository<Comments>;

  constructor() {
    this.repository = getRepository(Comments);
  }
  updated(data: IComments): Promise<Comments> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<void> {
    console.log("Deleting comments...");
    console.log(id);
    await this.repository.delete({ id });
  }
  async list({ post_id }: IComments): Promise<Comments[]> {
    const comments = await this.repository.find({ post_id });
    console.log(comments);
    return comments;
  }

  async create(data: IComments): Promise<Comments> {
    const comment = await this.repository.create(data);
    await this.repository.save(comment);
    return comment;
  }
}

export { CommentRepository };