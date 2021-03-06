import express from "express";
import cors from "cors";
import { testConnection, connectDB } from "./db/index.js";
import productsRouter from "./services/products/index.js";
import reviewsRouter from "./services/reviews/index.js";
import categoriesRouter from "./services/categories/index.js";
import models from "./services/products/index.js";
import listEndpoints from "express-list-endpoints";

const server = express();

const { PORT = 3001 } = process.env;

server.use(cors());

server.use(express.json());
server.use("/products", productsRouter);
server.use("/reviews", reviewsRouter);
server.use("/categories", categoriesRouter);

server.listen(PORT, async () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(listEndpoints(server));
  await testConnection();
  await connectDB();
});

server.on("error", (error) => {
  console.log("Server has stopped", error);
});
