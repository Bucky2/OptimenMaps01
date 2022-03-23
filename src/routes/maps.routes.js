import { Router } from "express";
import {renderMap} from "../controllers/maps.controller";
import { isAuthenticated } from "../helpers/auth";
const router = Router();
router.get("/maps/indexMap", isAuthenticated, renderMap);
export default router;
