import { Router } from "express";
import { CreateCommentController } from "../../../modules/comments/useCase/CreateComment/CreateCommentController";

const commentRoutes = Router();

const createCommentController = new CreateCommentController();

commentRoutes.post("/create", createCommentController.handle);

export { commentRoutes };
