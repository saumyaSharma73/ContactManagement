const mongoose = require("mongoose");

const connectDB = async () => {
  console.log('MONGODB_URI:', process.env.MONGODB_URI);  
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("database connect hogya");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
