import mongoose from "mongoose";

const connectingToDB = async () => {
	if (!process.env.MONGODB_URI) {
		throw new Error("There is missing local variable MONGODB_URI");
	}

	mongoose.set("strictQuery", true);
	await mongoose.connect(process.env.MONGODB_URI!);
};

export default connectingToDB;
