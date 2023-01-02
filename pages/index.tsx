import { config } from "process";
import { useEffect } from "react";
import { Button, Heading, Input, TextArea, Paragraph, Tag } from "../components";
import { useDBFetch, dbFetchProps } from "../hooks";
import { withLayout } from "../Layout/Layout";

function Home(): JSX.Element {
	return (
		<>
			<Heading tag="h1">Welcome to the OwnStorage!</Heading>
			<Paragraph size="large">
				This application was created as an educational project. Potential customer of this
				application is resellers who is buying products in other countries and deliver it to
				his own country. Essentially, app must improve reseller`s experience.
			</Paragraph>
			<Paragraph size="large">
				It can make order in your goods that are still on the way, already in stock or
				already sold. Each category is in the particular tab, depends on delivery status or
				if item has already sold. Changing category for particular item is intuitively and
				convenient. And every item has a customizable: course of currency, worth of
				delivery, delivery type, worth of one and all ordered items.
			</Paragraph>
			<Button appearance="colorful" color="ghost">
				ghost
			</Button>
			<Button appearance="transparent" color="red">
				white
			</Button>
		</>
	);
}

export default withLayout(Home);
