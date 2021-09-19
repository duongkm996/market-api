import { Router } from "express";
import {
  getList,
  getGlobal,
  getCategories,
  getDetail,
  getTrending,
} from "./Coins";
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from "./Users";

// User-route
const userRouter = Router();
userRouter.get("/all", getAllUsers);
userRouter.post("/add", addOneUser);
userRouter.put("/update", updateOneUser);
userRouter.delete("/delete/:id", deleteOneUser);

// Coin-route
const coinRouter = Router();
coinRouter.get("/markets", getList);
coinRouter.get("/global", getGlobal);
coinRouter.get("/categories", getCategories);
coinRouter.get("/trending", getTrending);
coinRouter.get("/detail/:coinId", getDetail);

// Export the base-router
const baseRouter = Router();
baseRouter.use("/users", userRouter);
baseRouter.use("/coins", coinRouter);
export default baseRouter;
