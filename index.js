import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
const PORT = 3000;

app.use((req,res,next)=>{ 
    console.log(`Method:${req.method} http://localhost:${PORT}${req.originalUrl}`);
    next();
});
app.use(router);

app.listen(PORT,()=>{
    console.log(`Server running ${PORT}`);
})