import express from "express";
import dotenv from "dotenv";
import { AppRouter } from "./src/router/AppRouter.js";
import { handleError } from "./src/middelwares/error.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(handleError)
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded())
app.use(AppRouter)



app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
