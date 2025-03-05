import {Router} from "express";
import { errorCheck } from "../controller/proof-read.js";

export const router = new Router();

router.get("/error-check",errorCheck);