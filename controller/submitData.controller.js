import Order from "../models/orders.model.js";

const submitData = async (req, res) => {
  try {
    console.log("Inside the data submit page", req.body);
    const data = req.body;
    const dbresp = await Order.insertMany([data], { ordered: false });
    if (dbresp.length > 0) {
        // Insertion was successful
        res.status(200).json({ message: "Data inserted successfully" });
      } else {
        // Insertion failed
        res.status(500).json({ message: "Data insertion failed" });
      }
  } catch (error) {
    console.log("Error happened while inserting data to DB", error);
    return false;
  }
};

export default submitData;
