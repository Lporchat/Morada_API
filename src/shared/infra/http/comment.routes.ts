import { Router } from "express";
import { CreateCommentController } from "../../../modules/comments/useCase/CreateComment/CreateCommentController";
import { ListCommentController } from "../../../modules/comments/useCase/ListComment/ListCommentController";

const commentRoutes = Router();

const createCommentController = new CreateCommentController();
const listCommentController = new ListCommentController();

commentRoutes.post("/create", createCommentController.handle);
commentRoutes.get("/", listCommentController.handle);

export { commentRoutes };
