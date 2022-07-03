import { Router } from "express";
import { commentRoutes } from "./comment.routes";
import { postsRoutes } from "./posts.routes";

const routes = Router();

routes.use("/post", postsRoutes);
routes.use("/comment", commentRoutes);

export { routes };
