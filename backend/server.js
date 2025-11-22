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
  origin: ["http://localhost:5173", "http://localhost:5174",""], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));


// Logging middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

// Routes
app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on PORT:`,PORT);
    });
});