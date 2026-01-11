import express from "express";
import dotenv from "dotenv";
import categoryRoutes from "./routes/categoryRoutes.js";
import productsRoutes from "./routes/productsRoutes.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/products", productsRoutes);

app.get("/projectcheck", (req, res) => {
  res.status(200).json({ message: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
