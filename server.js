import express from "express";
import cors from "cors";
import "dotenv/config";
import joyasRouter from "./src/routes/joyas.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/", joyasRouter);

app.listen(PORT, () => {
    console.log(
        `Conectado a servidor en el puerto 🔥🔥 http://localhost:${PORT}`
    );
});
