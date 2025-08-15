import express from 'express'
import {connectDb} from './db/connectDb.js'
import dotenv from 'dotenv';
import cors from 'cors'
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.route.js'
import path from "path";



const app= express();
dotenv.config();

const PORT=process.env.PORT||4000
const __dirname = path.resolve();

app.use(cors({origin:"http://localhost:5173", credentials:true})
)

app.use(express.json()); //allows to parse incoming requests with JSON payloads
app.use(cookieParser()); // allows us to parse incoming cookies


app.use("/api/auth",authRoutes);
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}
  
  
app.listen(PORT,()=>{
    connectDb()
console.log(`Server is running on port ${PORT}`)
})

