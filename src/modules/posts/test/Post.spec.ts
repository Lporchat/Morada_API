import { Connection, createConnection } from "typeorm";
import { CreatePostUseCase } from "../useCases/CreatePost/CreatePostUseCase";
import { UpdatedPostUseCase } from "../useCases/UpdatedPost/UpdatedPostUseCase";

let createPostUseCase: CreatePostUseCase;
let updatedPostUseCase: UpdatedPostUseCase;
let connection: Connection;

describe("Create a post", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    createPostUseCase = new CreatePostUseCase();
    updatedPostUseCase = new UpdatedPostUseCase();
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
    console.log(postEdit);
    expect(postEdit).toHaveProperty("id");
  });
});
