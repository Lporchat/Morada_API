import { Router } from "express";
import { CreatePostController } from "../../../modules/posts/useCases/CreatePost/CreatePostController";
import { DeletePostController } from "../../../modules/posts/useCases/DeletePost/DeletePostController";
import { DeslikePostController } from "../../../modules/posts/useCases/DeslikePost/DeslikePostController";
import { LikePostController } from "../../../modules/posts/useCases/LikePost/LikePostController";
import { ListPostController } from "../../../modules/posts/useCases/ListPosts/ListPostController";
import { UpdatedPostController } from "../../../modules/posts/useCases/UpdatedPost/UpdatedPostController";

const postsRoutes = Router();

const createPostController = new CreatePostController();
const likePostController = new LikePostController();
const deslikePostController = new DeslikePostController();
const deletePostController = new DeletePostController();
const updatedPostController = new UpdatedPostController();
const listPostController = new ListPostController();

postsRoutes.post("/create", createPostController.handle);
postsRoutes.post("/like/", likePostController.handle);
postsRoutes.post("/deslike/", deslikePostController.handle);
postsRoutes.delete("/", deletePostController.handle);
postsRoutes.put("/", updatedPostController.handle);
postsRoutes.get("/", listPostController.handle);

export { postsRoutes };
