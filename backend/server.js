import express from "express";
import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


// Middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174","https://task-manager-git-main-riteshkumar34s-projects.vercel.app/"], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));



app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on PORT:`,PORT);
    });
});