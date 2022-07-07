import { getRepository, Repository } from "typeorm";
import { Posts } from "../typeorm/entities/posts";
import { IPostRepository } from "./IPostRepository";

class PostRepository implements IPostRepository {
  private repository: Repository<Posts>;

  constructor() {
    this.repository = getRepository(Posts);
  }

  async deslike(id: string): Promise<boolean> {
    const post = await this.repository.findOne({ id });

    if (post.likes > 0) {
      post.likes--;
      await this.repository.save(post);
      return true;
    }
    return false;
  }

  async like(id: string): Promise<void> {
    const post = await this.repository.findOne({ id });
    post.likes++;
    await this.repository.save(post);
  }

  async create(name: string, body: string): Promise<Posts> {
    const post = await this.repository.create({
      name,
      body,
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

  async updated(id: string, name: string, body: string): Promise<Posts> {
    const post = await this.repository.findOne({ id });
    post.name = name;
    post.body = body;
    await this.repository.save(post);
    return post;
  }
}

export { PostRepository };
