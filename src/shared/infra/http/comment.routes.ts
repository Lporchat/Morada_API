import { Router } from "express";
import { CreateCommentController } from "../../../modules/comments/useCase/CreateComment/CreateCommentController";
import { DeleteCommentController } from "../../../modules/comments/useCase/DeleteComment/DeleteCommentController";
import { ListCommentController } from "../../../modules/comments/useCase/ListComment/ListCommentController";
import { UpdatedCommentController } from "../../../modules/comments/useCase/UpdatedComment/UpdatedPostController";

const commentRoutes = Router();

const createCommentController = new CreateCommentController();
const listCommentController = new ListCommentController();
const deleteCommentController = new DeleteCommentController();
const updatedCommentController = new UpdatedCommentController();

commentRoutes.post("/create", createCommentController.handle);
commentRoutes.post("/", listCommentController.handle);
commentRoutes.delete("/", deleteCommentController.handle);
commentRoutes.put("/", updatedCommentController.handle);

export { commentRoutes };
