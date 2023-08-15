import Franchise from "../models/franchiseEnquire.model.js";

const submitFranchiseEnquiryDetails = async (req, res) => {
  try {
    console.log("Inside the franchise enquiry details submit page", req.body);
    const data = req.body;
    const dbresp = await Franchise.insertMany([data], { ordered: false });
    if (dbresp.length > 0) {
      res
        .status(200)
        .json({ message: "Franchise Enquiry Details inserted successfully" });
    } else {
      res
        .status(500)
        .json({ message: "Error while inserting franchise enquiry details" });
    }
  } catch (error) {
    console.log("Inside catch block of subitFranchiseEnquiryDetails", error);
    res
      .status(500)
      .json({ message: "Error while inserting franchise enquiry details" });
  }
};

export default submitFranchiseEnquiryDetails;
