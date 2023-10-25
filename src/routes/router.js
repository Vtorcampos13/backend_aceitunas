import { Router } from "express";

import aceitunasRouter from "./aceitunasRouter.js";
import ciudadesRouter from "./ciudadesRouter.js";

const router = Router();

router.use("/aceitunas", aceitunasRouter);
router.use("/ciudades", ciudadesRouter);



export default router;