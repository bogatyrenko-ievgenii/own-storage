import { NextApiRequest, NextApiResponse } from "next";
import connectingToDB from "../../../database/connect";
import { Customer } from "../../../database/Customer/Customer.Schema";

const readCustomer = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		await connectingToDB();
		const customer = await Customer.findOne(req.body);
		res.json(customer);
	} catch (error: any) {
		res.statusCode = 401;
		res.json(error);
	}
};

export default readCustomer;
