import { Router } from "express";
import { CreateCommentController } from "../../../modules/comments/useCase/CreateComment/CreateCommentController";
import { DeleteCommentController } from "../../../modules/comments/useCase/DeleteComment/DeleteCommentController";
import { ListCommentController } from "../../../modules/comments/useCase/ListComment/ListCommentController";

const commentRoutes = Router();

const createCommentController = new CreateCommentController();
const listCommentController = new ListCommentController();
const deleteCommentController = new DeleteCommentController();

commentRoutes.post("/create", createCommentController.handle);
commentRoutes.get("/", listCommentController.handle);
commentRoutes.delete("/", deleteCommentController.handle);

export { commentRoutes };
