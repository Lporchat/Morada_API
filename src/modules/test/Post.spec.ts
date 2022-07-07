import { Connection, createConnection } from "typeorm";
import { Posts } from "../posts/infra/typeorm/entities/posts";
import { CreatePostUseCase } from "../posts/useCases/CreatePost/CreatePostUseCase";
import { ListPostUseCase } from "../posts/useCases/ListPosts/ListPostUseCase";
import { UpdatedPostUseCase } from "../posts/useCases/UpdatedPost/UpdatedPostUseCase";

let createPostUseCase: CreatePostUseCase;
let updatedPostUseCase: UpdatedPostUseCase;
let listPostUseCase: ListPostUseCase;
let connection: Connection;

describe("Create a post", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    createPostUseCase = new CreatePostUseCase();
    updatedPostUseCase = new UpdatedPostUseCase();
    listPostUseCase = new ListPostUseCase();
  });

  afterAll(async () => {
    await connection.close();
  });

  it("Criação de um novo Post", async () => {
    const post = await createPostUseCase.execute(
      "teste de nome de post",
      "teste de corpo de post"
    );

    expect(post).toHaveProperty("id");
  });

  it("Edição de um post", async () => {
    const { id } = await createPostUseCase.execute(
      "teste de nome de post",
      "teste de corpo de post"
    );

    const postEdit = await updatedPostUseCase.execute(
      id,
      "post Editado",
      "post Editado"
    );
    expect(postEdit.body).toEqual("post Editado");
    expect(postEdit.name).toEqual("post Editado");
  });

  it("Listando todos os post", async () => {
    const Post = await createPostUseCase.execute(
      "teste de nome de post",
      "teste de corpo de post"
    );

    const list = await listPostUseCase.execute();

    expect(list).toBeInstanceOf(Array);
  });
});
