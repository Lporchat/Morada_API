import { getRepository, Repository } from "typeorm";
import { Posts } from "../typeorm/entities/posts";
import { IPostRepository } from "./IPostRepository";

class PostRepository implements IPostRepository {
  private repository: Repository<Posts>;

  constructor() {
    this.repository = getRepository(Posts);
  }

  async like(id: string): Promise<void> {
    const post = await this.repository.findOne({ id });
    post.likes++;
    await this.repository.save(post);
  }

  async create(name: string): Promise<Posts> {
    const post = await this.repository.create({
      name,
    });
    await this.repository.save(post);
    return post;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }

  async list(): Promise<Posts[]> {
    const posts = await this.repository.find();
    return posts;
  }

  async updated(id: string, name: string): Promise<Posts> {
    const post = await this.repository.findOne({ id });
    post.name = name;
    await this.repository.save(post);
    return post;
  }
}

export { PostRepository };
