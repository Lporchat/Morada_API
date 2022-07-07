import { Connection, createConnection } from "typeorm";
import { CreateCommentUseCase } from "../comments/useCase/CreateComment/CreateCommentUseCase";
import { ListCommentUseCase } from "../comments/useCase/ListComment/ListCommentUseCase";
import { UpdatedCommentUseCase } from "../comments/useCase/UpdatedComment/UpdatedPostUseCase";
import { CreatePostUseCase } from "../posts/useCases/CreatePost/CreatePostUseCase";
import { ListPostUseCase } from "../posts/useCases/ListPosts/ListPostUseCase";

let createPostUseCase: CreatePostUseCase;
let listPostUseCase: ListPostUseCase;
let createCommentUseCase: CreateCommentUseCase;
let updatedCommentUseCase: UpdatedCommentUseCase;
let listCommentUseCase: ListCommentUseCase;
let connection: Connection;

describe("Comments Tests", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    createPostUseCase = new CreatePostUseCase();
    createCommentUseCase = new CreateCommentUseCase();
    updatedCommentUseCase = new UpdatedCommentUseCase();
    listCommentUseCase = new ListCommentUseCase();
  });

  afterAll(async () => {
    await connection.close();
  });

  it("Criação de um novo Comentario", async () => {
    const { id } = await createPostUseCase.execute(
      "teste de nome de post",
      "teste de corpo de post"
    );

    const comment = await createCommentUseCase.execute({
      post_id: id,
      comment: "comentario de teste",
      name_user: "nome de teste",
    });

    expect(comment).toHaveProperty("id");
  });

  it("Edição de um comentario", async () => {
    const { id } = await createPostUseCase.execute(
      "teste de nome de post",
      "teste de corpo de post"
    );

    const comment = await createCommentUseCase.execute({
      post_id: id,
      comment: "comentario de teste",
      name_user: "nome de teste",
    });

    const commentEdit = await updatedCommentUseCase.execute(
      comment.id,
      "comentario editado"
    );


    expect(commentEdit.comment).toEqual("comentario editado");
  });

  it("Listando todos os comentario de acordo com o post", async () => {
    const { id } = await createPostUseCase.execute(
      "teste de nome de post",
      "teste de corpo de post"
    );

    await createCommentUseCase.execute({
      post_id: id,
      comment: "comentario de teste",
      name_user: "nome de teste",
    });

    const list = await listCommentUseCase.execute({ post_id: id });

    expect(list).toBeInstanceOf(Array);
  });
});
