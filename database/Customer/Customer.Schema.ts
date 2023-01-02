import { Schema, model, models } from "mongoose";
import { ICustomer } from "./Customer.interface";

const customerSchema = new Schema<ICustomer>({
	name: { type: String, required: true, unique: true, maxlength: 50 },
	email: { type: String, required: true, unique: true, maxlength: 50 },
	password: { type: String, required: true },
});

export const Customer = models.Customer || model<ICustomer>("Customer", customerSchema);
