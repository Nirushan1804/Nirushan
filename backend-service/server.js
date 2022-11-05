const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const colors = require("colors");

//Import Routes
const ProductsRoutes = require("./routes/products.route");
const RefDataRoutes = require("./routes/ref_data.route");
const Filter_InventoryRoutes = require("./controllers/filter_inventory.controller");

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(cors());

connectDB();

//Route Middlewares
app.use("/api/v1/Products", ProductsRoutes);
app.use("/api/v1/Filter-Inventory", Filter_InventoryRoutes);
app.use("/api/v1", RefDataRoutes);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());


const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue
      .underline.bold
  )
);
