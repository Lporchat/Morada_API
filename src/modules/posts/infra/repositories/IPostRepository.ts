import { Posts } from "../typeorm/entities/posts";

interface IPostRepository {
  create(name: string, body: string): Promise<Posts>;
  delete(id: string): Promise<void>;
  list(): Promise<Posts[]>;
  updated(id: string, name: string, body: string): Promise<Posts>;
  like(id: string): Promise<void>;
  deslike(id: string): Promise<boolean>;
}

export { IPostRepository };
