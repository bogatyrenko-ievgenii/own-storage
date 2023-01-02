import { NextApiRequest, NextApiResponse } from "next";
import connectingToDB from "../../../database/connect";
import { Customer } from "../../../database/Customer/Customer.Schema";

const createCustomer = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		await connectingToDB();
		const newCustomer = await Customer.create(req.body);
		res.json(newCustomer);
	} catch (error: any) {
		if (error.code === 11000) {
			res.statusCode = 409;
			res.json("User with this name or email is already exists.");
		} else {
			res.statusCode = 404;
			res.json(error);
		}
	}
};

export default createCustomer;
