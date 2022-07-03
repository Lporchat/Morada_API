import { Posts } from "../typeorm/entities/posts";

interface IPostRepository {
  create(name: string): Promise<Posts>;
  delete(id: string): Promise<void>;
  list(): Promise<Posts[]>;
  findById(id: string): Promise<Posts>;
  like(id: string): Promise<void>;
}

export { IPostRepository };
