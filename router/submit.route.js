import express from "express";
const router = express.Router();
import submitOrderData from "../controller/submitOrderData.controller.js";
import submitFranchiseEnquiryDetails from "../controller/submitFranchiseEnquiryDetails.controller.js";

router.post("/data", submitOrderData);
router.post("/enquiry", submitFranchiseEnquiryDetails);

export default router;
