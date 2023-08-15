import mongoose from "mongoose";

const franchiseEnquirySchema = new mongoose.Schema(
  {
    First_Name: { type: String },
    Last_Name: { type: String },
    Mobile_Number: { type: Number },
    Email: { type: String },
    Message: { type: String },
    SubmittedOn: { type: Date, default: new Date() },
  },
  {
    timestamps: true,
    strict: false,
    timezone: "Asia/Kolkata",
  }
);

franchiseEnquirySchema.index({ First_Name: 1, Last_Name: 1 });
franchiseEnquirySchema.index({ First_Name: 1, Address: 1 });
franchiseEnquirySchema.index({ First_Name: 1, Mobile_Number: 1 });
franchiseEnquirySchema.index({ First_Name: 1 });
franchiseEnquirySchema.index({ Email: 1 });

const Franchise = mongoose.model("franchiseEnquiry", franchiseEnquirySchema);

export default Franchise;
