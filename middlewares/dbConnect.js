import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connections[0].readyState) {
    return;
  } else {
    mongoose.set("strictQuery", false);
     mongoose
      .connect(process.env.NEXT_PUBLIC_MONGO_URL)
      .then(console.log("MongoDB connected"))
      .catch((err) => console.log(err));
  }
};

export default dbConnect;