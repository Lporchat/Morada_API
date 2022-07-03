import { getRepository, Repository } from "typeorm";
import { Posts } from "../typeorm/entities/posts";
import { IPostRepository } from "./IPostRepository";

class PostRepository implements IPostRepository {
  private repository: Repository<Posts>;

  constructor() {
    this.repository = getRepository(Posts);
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

  async findById(id: string): Promise<Posts> {
    const post = await this.repository.findOne({ id });
    return post;
  }
}

export { PostRepository };
