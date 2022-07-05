import { Comments } from "../typeorm/entities/comments";

interface IComments {
  id?: string;
  post_id: string;
  name_user?: string;
  comment?: string;
}

interface ICommentRepository {
  create(data: IComments): Promise<Comments>;
  updated(data: IComments): Promise<Comments>;
  delete({ id }: IComments): Promise<void>;
  list({ post_id }: IComments): Promise<Comments[]>;
}

export { ICommentRepository, IComments };
