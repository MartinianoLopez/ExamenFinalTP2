import { Router } from "express";
import Controller from'../controllers/Controller.js';

const router = Router();

const controller = new Controller();
router.post("/", controller.addDonacion);
router.get("/:monto", controller.getReporte);

export default router;