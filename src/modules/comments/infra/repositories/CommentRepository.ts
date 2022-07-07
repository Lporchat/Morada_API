import { getRepository, Repository } from "typeorm";
import { Comments } from "../typeorm/entities/comments";
import { ICommentRepository, IComments } from "./ICommentRepository";

class CommentRepository implements ICommentRepository {
  private repository: Repository<Comments>;

  constructor() {
    this.repository = getRepository(Comments);
  }
  async updated({ id, comment }: IComments): Promise<Comments> {
    const comentario = await this.repository.findOne({ id });
    comentario.comment = comment;
    await this.repository.save(comentario);
    return comentario;
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
  async list({ post_id }: IComments): Promise<Comments[]> {
    const comments = await this.repository.find({ post_id });
    return comments;
  }

  async create(data: IComments): Promise<Comments> {
    const comment = await this.repository.create(data);
    await this.repository.save(comment);
    return comment;
  }
}

export { CommentRepository };
