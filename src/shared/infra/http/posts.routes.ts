import { Router } from "express";
import { CreatePostController } from "../../../modules/posts/useCases/CreatePost/CreatePostController";

const postsRoutes = Router();

const postController = new CreatePostController();

postsRoutes.post("/create", postController.handle);

export { postsRoutes };
