import express from "express";
import cors from "cors";
import router from "./routes.js";
import { swaggerUi, swaggerSpec } from "./swagger.js";

const app = express();
const PORT = 3000;
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// logs
app.use((req, res, next) => {
  console.log(
    `Method:${req.method} http://localhost:${PORT}${req.originalUrl}`
  );
  next();
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(router);

app.listen(PORT, () => {
  console.log("✅ Server running on http://localhost:3000");
  console.log("📄 Swagger docs at http://localhost:3000/api-docs");
});
