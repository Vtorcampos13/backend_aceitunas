import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("devolvemos todas las ciudades");
});

router.get("/:id", (req, res) => {
    res.send("devolvemos una ciudad por ID: "+req.params.id);
});

router.post("/", (req, res) => {
    res.send("creamos una ciudad nueva");
});

router.put("/:id", (req, res) => {
    res.send(`modificamos la ciudad con id: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
    res.send(`eliminamos la ciudad con id: ${req.params.id}`);
});

export default router;